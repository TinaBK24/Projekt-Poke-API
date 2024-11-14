# Pokemon Viewer

Dieses Projekt erstellt eine Webanwendung zum Anzeigen und Filtern von Pokémon mithilfe der [PokeAPI](https://pokeapi.co/). Die Anwendung ermöglicht es den Nutzern, Pokémon nach Namen zu suchen und sie nach Typen wie `BUG`, `FIRE`, `WATER` usw. zu filtern.

## Funktionen

- **Pokémon-Suche** nach Namen.
- **Filterung der Pokémon** nach Typ.
- **Anzeige von Pokémon-Informationen**: Name, Typen und Bild.

## Verwendete Technologien

- **HTML**: Struktur der Seite.
- **CSS**: Stile und Farben entsprechend den Pokémon-Typen.
- **TypeScript**: Hauptlogik für die Interaktion mit der PokeAPI, Filterung und Anzeige von Daten.

## Projektstruktur

- **index.html**: Hauptstruktur der Anwendung.
- **style.css**: Stile für die Anwendung, einschließlich Farben für Typen und Hover-Effekte.
- **main.ts**: Hauptdatei in TypeScript mit der Logik zum Laden, Anzeigen und Filtern von Pokémon.
- **interfaces**: Interfaces `IPokemon` und `IPokemonInfo`, die die Datenstruktur der Pokémon beschreiben.

## API

Das Projekt nutzt die [PokeAPI](https://pokeapi.co/), um Daten über Pokémon abzurufen.

## Screenshots

Hier sind einige Screenshots der Anwendung:

- **Hauptseite mit Such- und Filterfunktionen**  
  ![Screenshot der Hauptseite](/src/img/HomePage.png)

- **Suchergebnisse und Pokémon-Filter**  
  ![Screenshot der Suchergebnisse und Filter](/src/img/FilterPage.png)