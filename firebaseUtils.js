
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";

// Function to save test results to Firestore
export async function saveTestResults(userEmail, testType, score, date) {
  try {
    const docRef = await addDoc(collection(db, 'profiles', userEmail, 'tests'), {
      testType: testType,
      score: score,
      date: date,
    });
    console.log('Test results stored with ID: ', docRef.id);
  } catch (e) {
    console.error('Error storing test results: ', e);
  }
}