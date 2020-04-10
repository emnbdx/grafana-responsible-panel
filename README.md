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

## Configuration

This panel display different picture according to current working day.
To clarify with this sample db (available in src/db.json)

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

Pictures we'll display like that

|WEEK| MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY | SUNDAY |
|-|-|-|-|-|-|-|-|
|1|Bob|Billie|Ryan|Bob|Billie|Billie|Billie
|2|Ryan|Bob|...
|...|
||

You can adjust this by using offset (if somebody is missing).
Offset available value depends on database size for this on 0 or 3 do nothing but with 1 pictures display like that

|WEEK| MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY | SUNDAY |
|-|-|-|-|-|-|-|-|
|1|Billie|Ryan|Bob|Billie|Ryan|Ryan|Ryan
|2|Bob|Billie|...
|...|
||

and like that with 2

|WEEK| MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY | SUNDAY |
|-|-|-|-|-|-|-|-|
|1|Ryan|Bob|Billie|Ryan|Bob|Bob|Bob
|2|Billie|Ryan|...
|...|
||
