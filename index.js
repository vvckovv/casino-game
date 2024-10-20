const filterButtons = document.querySelectorAll(".filter_button button");
const gameCards = document.querySelectorAll(".game_cards .card");

const filterCard = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    gameCards.forEach(card => {

        card.classList.add("hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");

        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filterCard));