# TW PROJECT REGULATIONS
## !!!!FILE STRUCTURE AND TODO
Am mutat vechiul proiect in /old, putem sa mai luam de acolo daca mai trebuie ceva, dar structura noua este alta.
Toate sursele vor fi in src/. In src/server se gaseste toata logica API-ului, care respecta design patternul MVC(vezi mai jos).Aceasta este partea pe care user-ul nu o poate accesa.
In src/webapp va fi tot ce tine de frontend si de functionalitatile principale (charturi, exporturi, filtrare de date). Vom lucra pe servici, adica fiecare din cele dinainte
trebuie facute in .js separat. Tineti minte ca un astfel de json trebuie sa fie ceva de tipul:

        input -> prelucrare -> return output;
    spre ex.: serviciul donutChart: input: lista de state, lista de criterii -> prelucrare (requesturi la api) si crearea p-z de chart -> return chart;


## a. CERINTE

1. Rezolvarea integrală a problemei – conform cerinţelor specifice fiecărui proiect propus.

2. Din punct de vedere arhitectural, recurgerea la [MVC (sau variantele)](https://herbertograca.com/2017/08/17/mvc-and-its-variants/) este **obligatorie** pentru proiectele de tip **M**.

3. Pentru partea de client, interfaţa aplicaţiei/sitului Web va fi marcată **obligatoriu** în HTML5 – codul trebuind să fie [valid conform specificaţiilor Consorţiului Web](https://validator.w3.org/). Se vor utiliza [foi de stiluri CSS valide](https://jigsaw.w3.org/css-validator/) – pentru verificare, a se recurge şi la instrumentul [CSS Lint](http://csslint.net/) şi/sau [Stylelint](https://stylelint.io/). De asemenea, este obligatorie folosirea suitei de tehnologii Ajax.

4. Pentru stocarea şi managementul datelor, se vor putea utiliza servere de baze de date relaţionale, interogate via SQL, eventual recurgându-se la servere de baze de date aliniate [paradigmei NoSQL](https://github.com/erictleung/awesome-nosql-guides).

5. Respectarea cerinţelor de bază ale ingineriei software – *e.g.*, comentarea şi modularizarea codului-sursă, recurgerea la unităţi de testare şi altele – cu redactarea documentaţiilor aferente – precum manualul dezvoltatorului, în cazul dezvoltării unui API ori serviciu Web.

6. Se vor folosi pe cât posibil machete (*template*-uri) de prezentare şi metode de configurare şi administrare a aplicaţiei.

7. 

- Adoptarea principiilor designului Web responsiv.
- Import/export de date folosind formate deschise – minim, CSV.
- Existenţa unui modul propriu de administrare a aplicaţiei Web.
- Pentru proiecte de clasa **M**: abordare bazată pe (micro)servicii.


8. Implementarea va recurge la tehnici de prevenire a atacurilor (precum *Cross Site Scripting* sau *SQL injection*).



## b. Teorie

### MVC

MVC is one possible pattern for organizing your code. It's a popular one.

- **Model** - Manages the data of an application
- **View** - A visual representation of the model
- **Controller** - Links the user and the system

The **model** is the data. In this todo application, that'll be the actual todos, and the methods that will add, edit, or delete them.

The **view** is how the data is displayed. In this todo application, that will be the rendered HTML in the DOM and CSS.

The **controller** connects the model and the view. It takes user input, such as clicking or typing, and handles callbacks for user interactions.

Controller -> receives the request, validates the data that the service needs invokes the service and returns the result.
Service -> perform business logic like piecing together data from multiple db calls, data processing, etc.
Repository -> wrapper for model


### JS
        Modules are singleton. They will be loaded and executed only once.
        Modules can use import and export.
        Modules are always executed in strict mode.
        All objects (class, const, function, let or var) are private unless explicitly exported.
        The value of "this" is undefined at the outer scope (not window).
        Modules are loaded asynchronously.
        Modules are loaded using CORS. see Access-Control-Allow-Origin: *.
        Modules don't send cookies and authentication info by default. See crossorigin="use-credentials".
        imports are resolved statically at load time rather than dynamically at runtime.
        html comments are not allowed.



req -> controller -> service -> repository -> model


### c.On the go observations:
1. For creating database, used sqlite's util mode .csv
2. For generating the Accident model, used sequelize-auto


visualization type / compatibility

piechart : at least 2 states, no. of accidents in context of filter DONE
barchart : one state only evolution of no. of accidents in context of filter DONE
donutchart : weathers types, temperature, etc. DONE
tabel : everything DONE
columnchart : multiple states: 2-3 filters max DONE