# Frontend för husdjur-API med Angular

I denna projektet (U08) har vi fått i uppdrag att bygga en frontendapplikation med Angular, baserad på det backend-API vi byggde i uppgiften U05. Applikationen är tillgänglig för alla att använda.

## Funktionalitet

Denna projekt innehåller fullständigt stöd för alla CRUD-operationer för hantering av djur, samt vissa operationer för användaren. Fler CRUD-operationer kommer att implementeras längre fram.

* Registrera/logga in användare
* Skapa, hämta, uppdatera och ta bort husdjur

## Deployad version

## Installation

För dig som vill testa projekt lokalt, följ dessa instruktioner:

### steg 1 - Klona projektet

* Skapa en mapp där du vill att projektet (U08) ska ligga, öppna mappen i VS Code och skriv följande kommando:
```https://github.com/chas-academy/u08-angular-frontend-Lazcano007.git```

* Sedan kör du:
```cd u08-angular-frontend-Lazcano007```

### steg 2 - Installera oberoenden

* Efter lyckad kloning ska du köra följande kommando för att installera alla nödvändiga beroenden:
```npm install```

* Sedan ska du köra kommandot:
```ng serve```

* Vips nu har du fått igång projektet, och den körs på: "http://localhost:4200"

## Vill du lägga till en ny funktion?

* För att lägga till en ny funktion behöver du först vara i "u08-angular" mappen, och sedan skapa en ny komponent med kommandot:
```ng generate component components/namnpådinkomponent```

* Du har nu skapat en komponent med namnet du gav den som finns under mappen "components". Inuti din komponent har du 4 filer, varav:
  * Den första: som är din html fil där du skapar strukturen för din komponenet.
  * Den andra: som är en scss fil där du stylar komponenten.
  * Den tredje: som är din spec där du skapar tester för din komponenet.
  * Den fjärde: som är din ts fil det är där du skriver själva funktionaliteten i TypeScript för just din komponent.

* Om du vill hålla logiken utanför komponenten och återanvända den, skapa en service:

```ng generate service service/namnpådinservice```

* Detta skapar 2 filer, varav:
  * Den första: är spec filen som är för att testa din service.
  * Den andra: är ts filen och det är där du skriver din funktionalliteten för dina komponenter

* Efter att du skapat din komponent och service måste du routa och det gör du i "app.routes.ts" så den kan visas i appen. Såhär ska det routas:

```{ path: 'namn', component: NamnPåDinKomponentComponent}```

* Och vips nu är du klar med din nya funktionalitet, gratis!

## Kommande funktioner

Projektet är fortfarande under utveckling. Här är några planerade förbättringar:

* Lägga til återbesök perhusdjur
* Lägga till vaccinationer per husdjur
* Lägga till möjlighet att ladda upp bilder för varje husdjur

## Figma-design

Designen för projektet är skapad i Figma och fungerar som en visuell riktlinje för gränssnittet. Här nedan finns länken:
[U06-Frontend-design](https://www.figma.com/design/zZR3xrdGOXaK5HZqU9hNcl/U06-SKISS?node-id=0-1&t=G5fkP0MYxJr47c62-1)

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/3hLk1m_7)