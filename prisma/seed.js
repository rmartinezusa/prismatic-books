const prisma = require("../prisma");

async function seed() {
    const books = [
        { title: "The Great Gatsby" },
        { title: "Jane Eyre" },
        { title: "James and the Giant Peach" },
        { title: "Pride and Prejudice" },
        { title: "Sense and Sensibility" },
        { title: "Phantom of the Opera" },
        { title: "Tale of Two Cities" },
        { title: "Drood" },
        { title: "Where the Wild Things Are" },
    ];

    try {
        await prisma.book.createMany({ data: books });
        console.log('Seeding successful!');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
}

seed();



