// Functions for generating a bunch of test data

export function generateAFewTestNodes () {
    let elements = [
        {
            data: { id: 'Triceratops'}
        },
        {
            data: { id: 'Stegosaurus'} 
        },
        {
            data: { id: 'Tyrannosaurus'}
        },
        {
            data: { id: 'Tyrannosaurus-eats-Stegosaurus', source: 'Tyrannosaurus', target: 'Stegosaurus'}
        },
        {
            data: { id: 'Tyrannosaurus-eats-Triceratops', source: 'Tyrannosaurus', target: 'Triceratops'}
        }
    ];
    return(elements);
}