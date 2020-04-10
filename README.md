# Grafana Responsible Panel

Panel to display picture according to date.
At HelloAsso we use it to display responsible of monitoring for current day

## Build instructions

First, install dependencies:

`
yarn install
`

To work with this plugin run:

`
yarn dev
`

or

`
yarn watch
`

This will run linting tools and apply prettier fix.

To build the plugin run:

`
yarn build
`

## Usefull

Sample database is provided and can be found in src/db.json
```
{
    "responsibles" : [
        {
            "name": "Bob",
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/68/Bob_Clotworthy_1952.jpg"
        },
        {
            "name": "Billie",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Billie_Dove_from_Stars_of_the_Photoplay.jpg/220px-Billie_Dove_from_Stars_of_the_Photoplay.jpg"
        },
        {
            "name": "Ryan",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ryan_Kwanten_by_Gage_Skidmore.jpg/220px-Ryan_Kwanten_by_Gage_Skidmore.jpg"
        }
    ]
}
```


