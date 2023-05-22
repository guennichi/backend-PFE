const User = require("../Models/Account")


User.countDocuments().then(async (usersCount) => {
    if (usersCount === 0) {
        const usersToInsert = [
            {
                Nom: "Guennichi",
                Prenom: "Hanen",
                Pays: "Tunis",
                Lieu: "Tunis",
                Date_Naissence: "Tue Jan 05 1988 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
                Email: "admin@gmail.com",
                Password: "$2a$10$MDIRedaQqMwEzx78OdnOR.8ve5/W42.qDXm/GgQYkTsYfeioKmBkG",
                Role: "SUPER_ADMIN",
            }
        ]
        await User.create(usersToInsert);
    }
});


console.log(`=> All collections has been seeded successfully!`);