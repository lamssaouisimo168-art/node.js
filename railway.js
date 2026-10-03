const prompt = require("prompt-sync")();

// ===============================
// DONNEES
// ===============================

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 100,
        availableSeats: 50
    }
];

// Tableau des tickets
const tickets = [];


// ===============================
// 1. AFFICHER LES TRAJETS
// ===============================

function afficherTrajets() {

    console.log("\n=== TRAJETS DISPONIBLES ===\n");

    for (let i = 0; i < trips.length; i++) {

        console.log("#" + trips[i].id + " " +
            trips[i].departure + " → " +
            trips[i].destination);

        console.log("Départ : " + trips[i].departureTime);
        console.log("Arrivée : " + trips[i].arrivalTime);
        console.log("Prix : " + trips[i].price + " DH");
        console.log("Places disponibles : " + trips[i].availableSeats);
        console.log("-----------------------------");
    }
}


// ===============================
// 2. ACHETER UN TICKET
// ===============================

function acheterTicket() {

    console.log("\n=== ACHETER UN TICKET ===\n");

    const passengerName = prompt("Nom du passager : ");
    const tripId = Number(prompt("Identifiant du trajet : "));

    // Chercher le trajet
    let trip = null;

    for (let i = 0; i < trips.length; i++) {

        if (trips[i].id === tripId) {
            trip = trips[i];
            break;
        }
    }

    // Vérifier si le trajet existe
    if (trip === null) {
        console.log("Trajet introuvable.");
        return;
    }

    // Vérifier les places
    if (trip.availableSeats === 0) {
        console.log("Train complet.");
        return;
    }

    // ID du ticket
    const ticketId = tickets.length + 1;

    // Numéro de place
    const seatNumber = 51 - trip.availableSeats;

    // Créer le ticket
    const ticket = {
        id: ticketId,
        passengerName: passengerName,
        tripId: trip.id,
        seatNumber: seatNumber,
        price: trip.price
    };

    // Ajouter le ticket
    tickets.push(ticket);

    // Diminuer les places
    trip.availableSeats--;

    console.log("\nTicket acheté avec succès.\n");

    console.log("Ticket #" + ticket.id);
    console.log("Passager : " + ticket.passengerName);
    console.log("Trajet : " +
        trip.departure + " → " +
        trip.destination);
    console.log("Place : " + ticket.seatNumber);
    console.log("Prix : " + ticket.price + " DH");
}


// ===============================
// 3. AFFICHER LES TICKETS
// ===============================

function afficherTickets() {

    console.log("\n=== TICKETS ===\n");

    if (tickets.length === 0) {
        console.log("Aucun ticket enregistré.");
        return;
    }

    for (let i = 0; i < tickets.length; i++) {

        const ticket = tickets[i];

        // Chercher le trajet
        let trip = null;

        for (let j = 0; j < trips.length; j++) {

            if (trips[j].id === ticket.tripId) {
                trip = trips[j];
                break;
            }
        }

        console.log("Ticket #" + ticket.id);
        console.log("Passager : " + ticket.passengerName);
        console.log("Trajet : " +
            trip.departure + " → " +
            trip.destination);
        console.log("Place : " + ticket.seatNumber);
        console.log("Prix : " + ticket.price + " DH");
        console.log("-----------------------------");
    }
}


// ===============================
// 4. ANNULER UN TICKET
// ===============================

function annulerTicket() {

    console.log("\n=== ANNULER UN TICKET ===\n");

    if (tickets.length === 0) {
        console.log("Aucun ticket enregistré.");
        return;
    }

    const ticketId = Number(prompt("Identifiant du ticket : "));

    let ticketIndex = -1;

    // Chercher le ticket
    for (let i = 0; i < tickets.length; i++) {

        if (tickets[i].id === ticketId) {
            ticketIndex = i;
            break;
        }
    }

    // Ticket introuvable
    if (ticketIndex === -1) {
        console.log("Ticket introuvable.");
        return;
    }

    const ticket = tickets[ticketIndex];

    // Chercher le trajet
    for (let i = 0; i < trips.length; i++) {

        if (trips[i].id === ticket.tripId) {

            trips[i].availableSeats++;

            break;
        }
    }

    // Supprimer le ticket
    tickets.splice(ticketIndex, 1);

    console.log("Ticket annulé avec succès.");
}


// ===============================
// 5. RECHERCHER UN TICKET
// ===============================

function rechercherTicket() {

    console.log("\n=== RECHERCHER UN TICKET ===\n");

    const passengerName = prompt("Nom du passager : ");

    let found = false;

    for (let i = 0; i < tickets.length; i++) {

        if (
            tickets[i].passengerName.toLowerCase()
            === passengerName.toLowerCase()
        ) {

            const ticket = tickets[i];

            // Chercher le trajet
            let trip = null;

            for (let j = 0; j < trips.length; j++) {

                if (trips[j].id === ticket.tripId) {
                    trip = trips[j];
                    break;
                }
            }

            console.log("\nTicket #" + ticket.id);
            console.log("Passager : " + ticket.passengerName);
            console.log("Trajet : " +
                trip.departure + " → " +
                trip.destination);
            console.log("Place : " + ticket.seatNumber);
            console.log("Prix : " + ticket.price + " DH");

            found = true;
        }
    }

    if (found === false) {
        console.log("Aucun ticket trouvé pour ce passager.");
    }
}


// ===============================
// 6. FILTRER LES TRAJETS
// ===============================

function filtrerTrajets() {

    console.log("\n=== FILTRER LES TRAJETS ===\n");

    const departureCity = prompt("Ville de départ : ");

    let found = false;

    for (let i = 0; i < trips.length; i++) {

        if (
            trips[i].departure.toLowerCase()
            === departureCity.toLowerCase()
        ) {

            console.log(
                trips[i].departure +
                " → " +
                trips[i].destination +
                " : " +
                trips[i].price +
                " DH"
            );

            found = true;
        }
    }

    if (found === false) {
        console.log("Aucun trajet trouvé.");
    }
}


// ===============================
// 7. TRIER LES TRAJETS
// ===============================

function trierTrajets() {

    console.log("\n=== TRAJETS TRIÉS PAR PRIX ===\n");

    // Bubble Sort
    for (let i = 0; i < trips.length - 1; i++) {

        for (let j = 0; j < trips.length - 1 - i; j++) {

            if (trips[j].price > trips[j + 1].price) {

                let temp = trips[j];

                trips[j] = trips[j + 1];

                trips[j + 1] = temp;
            }
        }
    }

    for (let i = 0; i < trips.length; i++) {

        console.log(
            trips[i].departure +
            " → " +
            trips[i].destination +
            " : " +
            trips[i].price +
            " DH"
        );
    }
}


// ===============================
// BONUS : STATISTIQUES
// ===============================

function statistiques() {

    console.log("\n=== STATISTIQUES ===\n");

    console.log(
        "Nombre total de tickets : " +
        tickets.length
    );

    let total = 0;

    for (let i = 0; i < tickets.length; i++) {
        total = total + tickets[i].price;
    }

    console.log(
        "Chiffre d'affaires total : " +
        total +
        " DH"
    );

    if (tickets.length === 0) {
        return;
    }

    // Compter les ventes par trajet
    let bestTripId = tickets[0].tripId;
    let bestCount = 0;

    for (let i = 0; i < trips.length; i++) {

        let count = 0;

        for (let j = 0; j < tickets.length; j++) {

            if (tickets[j].tripId === trips[i].id) {
                count++;
            }
        }

        if (count > bestCount) {
            bestCount = count;
            bestTripId = trips[i].id;
        }
    }

    // Chercher le meilleur trajet
    let bestTrip = null;

    for (let i = 0; i < trips.length; i++) {

        if (trips[i].id === bestTripId) {
            bestTrip = trips[i];
            break;
        }
    }

    console.log("\nTrajet le plus vendu :");
    console.log(
        bestTrip.departure +
        " → " +
        bestTrip.destination
    );
    console.log(bestCount + " tickets vendus");
}


// ===============================
// MENU PRINCIPAL
// ===============================

function menuPrincipal() {

    let choice = -1;

    while (choice !== 0) {

        console.log("\n=================================");
        console.log("       RAILWAY MANAGER");
        console.log("=================================\n");

        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("8. Statistiques");
        console.log("0. Quitter");

        choice = Number(prompt("\nVotre choix : "));

        switch (choice) {

            case 1:
                afficherTrajets();
                break;

            case 2:
                acheterTicket();
                break;

            case 3:
                afficherTickets();
                break;

            case 4:
                annulerTicket();
                break;

            case 5:
                rechercherTicket();
                break;

            case 6:
                filtrerTrajets();
                break;

            case 7:
                trierTrajets();
                break;

            case 8:
                statistiques();
                break;

            case 0:
                console.log("\nMerci d'avoir utilisé Railway Manager.");
                break;

            default:
                console.log("\nChoix invalide.");
        }
    }
}


// ===============================
// LANCEMENT DU PROGRAMME
// ===============================

menuPrincipal();