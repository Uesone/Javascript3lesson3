function fetchBooks() {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore");
      }
      return response.json();
    })
    .then((books) => {
      displayBooks(books);
    })
    .catch((error) => {
      console.error("Errore!!!", error);
    });
}

function displayBooks(books) {
  const container = document.getElementById("booksContainer");
  books.forEach((book) => {
    const card = createCard(book);
    container.appendChild(card);
  });
}

// Funzione per creare una card per un libro
function createCard(book) {
  const col = document.createElement("div");
  col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

  const card = document.createElement("div");
  card.className = "card h-100";

  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = book.img;
  img.alt = book.title;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body d-flex flex-column";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = book.title;

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText = `Prezzo: ${book.price}€`;

  const discardButton = document.createElement("button");
  discardButton.className = "btn btn-danger mt-auto";
  discardButton.innerText = "Scarta";
  discardButton.addEventListener("click", () => {
    col.remove();
  });

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(discardButton);

  card.appendChild(img);
  card.appendChild(cardBody);

  col.appendChild(card);

  return col;
}

fetchBooks();
