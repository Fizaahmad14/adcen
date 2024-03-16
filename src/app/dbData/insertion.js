import data from "./data";
import UniDetailsModel from "../../../models/uniDetails";
export default async function testUniDetailsModel() {
    try {
      // Iterate over each object in the data array and insert it into the database
      await Promise.all(data.map(async (item, index) => {
          await UniDetailsModel.create({
              id: index,
              Name: item.Name,
              href: item.href,
              src: item.src,
              Degree: item.Degree,
              Campus: item.Campus,
              fees: {
                  Tuition: item.fees.Tuition,
                  Hostel: item.fees.Hostel,
                  Transport: item.fees.Transport,
                  Food: item.fees.Food
              }
          });
      }));
  
      console.log("Data inserted successfully.");
      //console.log('Sample document inserted:', result);
  
      // Query for the inserted document
      const documents = await UniDetailsModel.find({ id: 1 });
      console.log('Documents found:', documents);
    } catch (error) {
      console.error('Error testing UniDetailsModel:', error);
    }
  }
  