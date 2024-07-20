
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCZ5_jPSRVyS93zGn-_fXYvETNwumO1XV4",
//   authDomain: "jsassesment.firebaseapp.com",
//   projectId: "jsassesment",
//   storageBucket: "jsassesment.appspot.com",
//   messagingSenderId: "308972108674",
//   appId: "1:308972108674:web:40b5cf5419e679f1d76d9b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// const db = getFirestore(app);

// document.addEventListener('DOMContentLoaded', function() {
//   const addProductButton = document.querySelector('.btn.add-product');
//   const updateInventoryButton = document.querySelector('.btn.update-inventory');

//   addProductButton.addEventListener('click', function() {
//     // Create overlay
//     const overlay = document.createElement('div');
//     overlay.className = 'popup-overlay';

//     // Create form elements
//     const form = document.createElement('form');
//     form.className = 'popup-form';
//     form.id = 'addProductForm';

//     const productNameLabel = document.createElement('label');
//     productNameLabel.setAttribute('for', 'productName');
//     productNameLabel.textContent = 'Product Name:';
//     form.appendChild(productNameLabel);

//     const productNameInput = document.createElement('input');
//     productNameInput.type = 'text';
//     productNameInput.id = 'productName';
//     productNameInput.name = 'productName';
//     productNameInput.required = true;
//     form.appendChild(productNameInput);

//     const productQuantityLabel = document.createElement('label');
//     productQuantityLabel.setAttribute('for', 'productQuantity');
//     productQuantityLabel.textContent = 'Product Quantity:';
//     form.appendChild(productQuantityLabel);

//     const productQuantityInput = document.createElement('input');
//     productQuantityInput.type = 'number';
//     productQuantityInput.id = 'productQuantity';
//     productQuantityInput.name = 'productQuantity';
//     productQuantityInput.required = true;
//     form.appendChild(productQuantityInput);

//     const submitButton = document.createElement('button');
//     submitButton.type = 'submit';
//     submitButton.className = 'btn';
//     submitButton.textContent = 'Submit';
//     form.appendChild(submitButton);

//     const closeButton = document.createElement('button');
//     closeButton.type = 'button';
//     closeButton.className = 'btn close';

//     // Create close icon
//     const closeIcon = document.createElement('i');
//     closeIcon.className = 'fa-solid fa-circle-xmark';
//     closeButton.appendChild(closeIcon);

//     closeButton.addEventListener('click', function() {
//       overlay.remove();
//     });
//     form.appendChild(closeButton);

//     overlay.appendChild(form);
//     document.body.appendChild(overlay);

//     form.addEventListener('submit', async function(e) {
//       e.preventDefault();
//       const productName = productNameInput.value;
//       const productQuantity = productQuantityInput.value;

//       try {
//         // Add product to Firestore
//         const docRef = await addDoc(collection(db, 'inventory'), {
//           name: productName,
//           quantity: parseInt(productQuantity)
//         });
//         console.log('Product added with ID: ', docRef.id);
//         alert('Product added ');


//         // Update inventory display
//         updateInventory();
//       } catch (error) {
//         console.error('Error adding product: ', error.message);
//       }
//       overlay.remove();
//     });
//   });

//   function createUpdateInventoryForm() {
//     // Create overlay
//     const overlay = document.createElement('div');
//     overlay.className = 'popup-overlay';

//     // Create form elements
//     const form = document.createElement('form');
//     form.className = 'popup-form';
//     form.id = 'updateInventoryForm';

//     const productNameLabel = document.createElement('label');
//     productNameLabel.setAttribute('for', 'updateProductName');
//     productNameLabel.textContent = 'Product Name:';
//     form.appendChild(productNameLabel);

//     const productNameInput = document.createElement('input');
//     productNameInput.type = 'text';
//     productNameInput.id = 'updateProductName';
//     productNameInput.name = 'productName';
//     productNameInput.required = true;
//     form.appendChild(productNameInput);

//     const productQuantityLabel = document.createElement('label');
//     productQuantityLabel.setAttribute('for', 'updateProductQuantity');
//     productQuantityLabel.textContent = 'Product Quantity:';
//     form.appendChild(productQuantityLabel);

//     const productQuantityInput = document.createElement('input');
//     productQuantityInput.type = 'number';
//     productQuantityInput.id = 'updateProductQuantity';
//     productQuantityInput.name = 'productQuantity';
//     productQuantityInput.required = true;
//     form.appendChild(productQuantityInput);

//     const recipientLabel = document.createElement('label');
//     recipientLabel.setAttribute('for', 'updateRecipient');
//     recipientLabel.textContent = 'Recipient:';
//     form.appendChild(recipientLabel);

//     const recipientInput = document.createElement('input');
//     recipientInput.type = 'text';
//     recipientInput.id = 'updateRecipient';
//     recipientInput.name = 'recipient';
//     recipientInput.required = true;
//     form.appendChild(recipientInput);

//     const submitButton = document.createElement('button');
//     submitButton.type = 'submit';
//     submitButton.className = 'btn';
//     submitButton.textContent = 'Update';
//     form.appendChild(submitButton);

//     const closeButton = document.createElement('button');
//     closeButton.type = 'button';
//     closeButton.className = 'btn close';
    
//     // Create close icon
//     const closeIcon = document.createElement('i');
//     closeIcon.className = 'fa-solid fa-circle-xmark';
//     closeButton.appendChild(closeIcon);

//     closeButton.addEventListener('click', function() {
//       overlay.remove();
//     });
//     form.appendChild(closeButton);

//     overlay.appendChild(form);
//     document.body.appendChild(overlay);

//     form.addEventListener('submit', async function(e) {
//       e.preventDefault();
//       const productName = productNameInput.value;
//       const productQuantity = productQuantityInput.value;
//       const recipient = recipientInput.value;

//       try {
//         // Add recipient details to Firestore
//         await addDoc(collection(db, 'recipients'), {
//           name: recipient,
//           product: productName,
//           quantity: parseInt(productQuantity),
//           date: new Date().toLocaleDateString()
//         });
//         console.log('Recipient details added');
//         alert('Recipient details added');


//         // Update product quantity in inventory
//         const querySnapshot = await getDocs(collection(db, 'inventory'));
//         querySnapshot.forEach(async (doc) => {
//           if (doc.data().name === productName) {
//             const docRef = doc(db, 'inventory', doc.id);
//             await updateDoc(docRef, {
//               quantity: doc.data().quantity - parseInt(productQuantity)
//             });
//           }
//         });

//         updateInventory();
//       } catch (error) {
//         console.error('Error updating inventory: ', error.message);
//       }
//       overlay.remove();
//     });
//   }

//   // Event listener for Update Inventory Button
//   updateInventoryButton.addEventListener('click', function() {
//     createUpdateInventoryForm();
//   });
// });

// async function updateInventory() {
//   try {
//     // Fetch and display inventory
//     const inventoryQuerySnapshot = await getDocs(collection(db, 'inventory'));
//     const boxes = document.querySelectorAll('.inventory-box');

//     // Clear existing inventory boxes
//     boxes.forEach(box => {
//       box.querySelector('.box-title').textContent = '';
//       box.querySelector('.box-count').textContent = '';
//     });

//     // Update existing boxes or create new ones as needed
//     let index = 0;
//     inventoryQuerySnapshot.forEach(doc => {
//       if (index < boxes.length) {
//         boxes[index].querySelector('.box-title').textContent = doc.data().name;
//         boxes[index].querySelector('.box-count').textContent = doc.data().quantity;
//       } else {
//         // Create new boxes if needed (this part depends on your HTML structure)
//         const newBox = document.createElement('div');
//         newBox.className = 'inventory-box';
//         newBox.innerHTML = `
//           <h3 class="box-title">${doc.data().name}</h3>
//           <p class="box-count">${doc.data().quantity}</p>
//         `;
//         document.querySelector('#inventoryContainer').appendChild(newBox);
//       }
//       index++;
//     });

//     // Create chart data
//     const labels = [];
//     const data = [];
//     inventoryQuerySnapshot.forEach(doc => {
//       labels.push(doc.data().name);
//       data.push(doc.data().quantity);
//     });
//     createChart(labels, data);

//     // Update recipient table
//     const recipientsQuerySnapshot = await getDocs(collection(db, 'recipients'));
//     const tbody = document.querySelector('#recipientTable tbody');
//     tbody.innerHTML = '';
//     recipientsQuerySnapshot.forEach(doc => {
//       const row = document.createElement('tr');
//       row.innerHTML = `<td>${doc.data().name}</td><td>${doc.data().product}</td><td>${doc.data().quantity}</td><td>${doc.data().date}</td>`;
//       tbody.appendChild(row);
//     });
//   } catch (error) {
//     console.error('Error updating inventory: ', error.message);
//   }
// }


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ5_jPSRVyS93zGn-_fXYvETNwumO1XV4",
  authDomain: "jsassesment.firebaseapp.com",
  projectId: "jsassesment",
  storageBucket: "jsassesment.appspot.com",
  messagingSenderId: "308972108674",
  appId: "1:308972108674:web:40b5cf5419e679f1d76d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', function() {
  const addProductButton = document.querySelector('.btn.add-product');
  const updateInventoryButton = document.querySelector('.btn.update-inventory');

  addProductButton.addEventListener('click', function() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    // Create form elements
    const form = document.createElement('form');
    form.className = 'popup-form';
    form.id = 'addProductForm';

    const productNameLabel = document.createElement('label');
    productNameLabel.setAttribute('for', 'productName');
    productNameLabel.textContent = 'Product Name:';
    form.appendChild(productNameLabel);

    const productNameInput = document.createElement('input');
    productNameInput.type = 'text';
    productNameInput.id = 'productName';
    productNameInput.name = 'productName';
    productNameInput.required = true;
    form.appendChild(productNameInput);

    const productQuantityLabel = document.createElement('label');
    productQuantityLabel.setAttribute('for', 'productQuantity');
    productQuantityLabel.textContent = 'Product Quantity:';
    form.appendChild(productQuantityLabel);

    const productQuantityInput = document.createElement('input');
    productQuantityInput.type = 'number';
    productQuantityInput.id = 'productQuantity';
    productQuantityInput.name = 'productQuantity';
    productQuantityInput.required = true;
    form.appendChild(productQuantityInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'btn';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn close';

    // Create close icon
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa-solid fa-circle-xmark';
    closeButton.appendChild(closeIcon);

    closeButton.addEventListener('click', function() {
      overlay.remove();
    });
    form.appendChild(closeButton);

    overlay.appendChild(form);
    document.body.appendChild(overlay);

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const productName = productNameInput.value;
      const productQuantity = productQuantityInput.value;

      try {
        // Add product to Firestore
        const docRef = await addDoc(collection(db, 'inventory'), {
          name: productName,
          quantity: parseInt(productQuantity)
        });
        console.log('Product added with ID: ', docRef.id);
        alert('Product added ');

        // Update inventory display
        updateInventory();
      } catch (error) {
        console.error('Error adding product: ', error.message);
      }
      overlay.remove();
    });
  });

  function createUpdateInventoryForm() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    // Create form elements
    const form = document.createElement('form');
    form.className = 'popup-form';
    form.id = 'updateInventoryForm';

    const productNameLabel = document.createElement('label');
    productNameLabel.setAttribute('for', 'updateProductName');
    productNameLabel.textContent = 'Product Name:';
    form.appendChild(productNameLabel);

    const productNameInput = document.createElement('input');
    productNameInput.type = 'text';
    productNameInput.id = 'updateProductName';
    productNameInput.name = 'productName';
    productNameInput.required = true;
    form.appendChild(productNameInput);

    const productQuantityLabel = document.createElement('label');
    productQuantityLabel.setAttribute('for', 'updateProductQuantity');
    productQuantityLabel.textContent = 'Product Quantity:';
    form.appendChild(productQuantityLabel);

    const productQuantityInput = document.createElement('input');
    productQuantityInput.type = 'number';
    productQuantityInput.id = 'updateProductQuantity';
    productQuantityInput.name = 'productQuantity';
    productQuantityInput.required = true;
    form.appendChild(productQuantityInput);

    const recipientLabel = document.createElement('label');
    recipientLabel.setAttribute('for', 'updateRecipient');
    recipientLabel.textContent = 'Recipient:';
    form.appendChild(recipientLabel);

    const recipientInput = document.createElement('input');
    recipientInput.type = 'text';
    recipientInput.id = 'updateRecipient';
    recipientInput.name = 'recipient';
    recipientInput.required = true;
    form.appendChild(recipientInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'btn';
    submitButton.textContent = 'Update';
    form.appendChild(submitButton);

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn close';
    
    // Create close icon
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa-solid fa-circle-xmark';
    closeButton.appendChild(closeIcon);

    closeButton.addEventListener('click', function() {
      overlay.remove();
    });
    form.appendChild(closeButton);

    overlay.appendChild(form);
    document.body.appendChild(overlay);

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const productName = productNameInput.value;
      const productQuantity = productQuantityInput.value;
      const recipient = recipientInput.value;

      try {
        // Update HTML table with new recipient details
        const tbody = document.querySelector('#recipientTable tbody');
        const row = document.createElement('tr');
        row.innerHTML = `<td>${recipient}</td><td>${productName}</td><td>${productQuantity}</td>`;
        tbody.appendChild(row);

        // Update inventory display (if needed)
        updateInventory();

        alert('Recipient details added');
      } catch (error) {
        console.error('Error updating inventory: ', error.message);
      }
      overlay.remove();
    });
  }

  // Event listener for Update Inventory Button
  updateInventoryButton.addEventListener('click', function() {
    createUpdateInventoryForm();
  });
});

async function updateInventory() {
  try {
    // Fetch and display inventory
    const inventoryQuerySnapshot = await getDocs(collection(db, 'inventory'));
    const boxes = document.querySelectorAll('.inventory-box');

    // Clear existing inventory boxes
    boxes.forEach(box => {
      box.querySelector('.box-title').textContent = '';
      box.querySelector('.box-count').textContent = '';
    });

    // Update existing boxes or create new ones as needed
    let index = 0;
    inventoryQuerySnapshot.forEach(doc => {
      if (index < boxes.length) {
        boxes[index].querySelector('.box-title').textContent = doc.data().name;
        boxes[index].querySelector('.box-count').textContent = doc.data().quantity;
      } else {
        // Create new boxes if needed (this part depends on your HTML structure)
        const newBox = document.createElement('div');
        newBox.className = 'inventory-box';
        newBox.innerHTML = `
          <h3 class="box-title">${doc.data().name}</h3>
          <p class="box-count">${doc.data().quantity}</p>
        `;
        document.querySelector('#inventoryContainer').appendChild(newBox);
      }
      index++;
    });

    // Update recipient table
    const recipientsQuerySnapshot = await getDocs(collection(db, 'recipients'));
    const tbody = document.querySelector('#recipientTable tbody');
    tbody.innerHTML = '';
    recipientsQuerySnapshot.forEach(doc => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${doc.data().name}</td><td>${doc.data().product}</td><td>${doc.data().quantity}</td>`;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error('Error updating inventory: ', error.message);
  }
}



var xValues = ["ooks", "Bags", "Toys"];
var yValues = [55, 44, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});
