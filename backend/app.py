from flask import Flask, jsonify, request
import pandas as pd
from flask_cors import CORS


app = Flask(__name__)
CORS(app, supports_credentials=True, origins='http://localhost:3000')
# Load your DataFrame from the CSV file
merged_df = pd.read_csv('temp.csv')

correct_count = 0  # Initialize outside of the function
incorrect_count = 0  # Initialize outside of the function


# Function to generate the next question based on difficulty level
def generate_question(current_difficulty, asked_questions):
    filtered_questions = merged_df[(merged_df['Difficulty'] == current_difficulty) & (~merged_df['Question'].isin(asked_questions))]
    return filtered_questions.sample(1)

# Function to check the user's answer
def check_answer(question, user_answer):
    return user_answer.lower() == question['Answer'].iloc[0].lower()

current_difficulty = "easy"
asked_questions = []

@app.route('/get_question', methods=['POST'])
def get_question():
    global current_difficulty
    global asked_questions
    current_question = generate_question(current_difficulty, asked_questions)

    if current_question.empty:
        # Change difficulty level if no more questions available
        current_difficulty = merged_df['Difficulty'][merged_df['Difficulty'].gt(current_difficulty)].min()
        asked_questions = []  # Reset asked questions

        # Get a new question
        current_question = generate_question(current_difficulty, asked_questions)
    question_text = current_question['Question'].iloc[0]
    options = [current_question['Option A'].iloc[0], current_question['Option B'].iloc[0], current_question['Option C'].iloc[0], current_question['Option D'].iloc[0]]

    # Add the current question to the list of asked questions
    asked_questions.append(question_text)
    return jsonify({'question': question_text, 'options': options})

@app.route('/check_answer', methods=['POST'])
def check_user_answer():
    # Define global variables to keep track of counts
    global correct_count  # Access global variable
    global incorrect_count  # Access global variable


    user_answer = request.json['answer']

    # Get the current question
    current_question = merged_df[merged_df['Question'] == asked_questions[-1]]

    # Get the correct answer from the DataFrame
    correct_answer = current_question['Answer'].iloc[0].strip().lower()
    user_input = user_answer.strip().lower()

    print(f"User's Input: '{user_input}'")
    print(f"Correct Answer: '{correct_answer}'")

    # Check if the user's answer is correct
    is_correct = user_input == correct_answer

    # Update the counter based on the correctness
    if is_correct:
        correct_count += 1
    else:
        incorrect_count += 1

    # Prepare the response message
    if is_correct:
        message = "Correct!"
    else:
        message = "Incorrect!"

    # Provide personalized feedback based on the user's answer
    if is_correct:
        feedback = "Well done! You got it right."
    else:
        feedback = f"Oops! The correct answer is {correct_answer}."

    return jsonify({'message': message, 'correct_count': correct_count, 'incorrect_count': incorrect_count, 'total_asked': len(asked_questions), 'feedback': feedback})

if __name__ == '__main__':
    app.run(debug=True)
