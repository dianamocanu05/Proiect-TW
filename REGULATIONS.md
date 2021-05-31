# TW PROJECT REGULATIONS



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





### c.On the go observations:
1. For creating database, used sqlite's utilitary mode .csv
2. For generating the Accident model, used sequelize-auto
3.
