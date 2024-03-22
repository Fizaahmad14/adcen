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
              },
              information: {
                  "Historical Perspective": item.information["Historical Perspective"],
                  "Established/Charter": item.information["Established/Charter"],
                  "University Charter": item.information["University Charter"],
                  "Vision": item.information["Vision"],
                  "Mission Statement": item.information["Mission Statement"],
                  "Research and Discovery": item.information["Research and Discovery"],
                  "Teaching and Learning": item.information["Teaching and Learning"],
                  "Outreach and Public Service": item.information["Outreach and Public Service"],
                  "International Linkages": item.information["International Linkages"],
                  "Why this University": item.information["Why this University"]
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
