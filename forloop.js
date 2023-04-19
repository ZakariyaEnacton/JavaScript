var countries = [
    'India',
    'USA',
    'England',
    'Thiland',
    2000,
    'China',
    'Japan',
    2001,
    'Singapore',
]

for (let i = 0; i < countries.length; i++) {
    if (typeof countries[i] !== 'string') continue; // here use typeof to check the value
    console.log(countries[i]);
}