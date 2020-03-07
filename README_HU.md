# Micro Bit Messenger
Ez egy meglehetősen gyagya chat program, ami a Micro Bit beépített rádió funkciója (vagyis a Nordic Gazell protokoll használata) segítségével képes üzeneteket küldeni és fogadni. Az üzenetek írásához csak némi türelem kell, külső kiegészítőket nem igényel. Opcionálisan lehet viszont hangszórót csatlakoztatni a kütyühöz a szokásos P0 lábra, mert a beérkező üzeneteket csipogás is jelzi.

## Használati útmutató
A programban kétféle mód van: egy fogadó és egy szerkesztő/küldő mód, mely között a "B" gomb lenyomásával lehet váltani.

A Micro Bit bekapcsolásakor egy háromszög ikon jelenik meg egy másodpercre - ez egy parabola antennára akar hasonlítani - ez jelöli a fogadó módot. Ha fogadó módban érkezik egy üzenet, akkor megszólal a hangjelzés, megjelenik egy egyszerű animáció (felülről lefele mozgó nyíl) majd a képernyőn végigszalad a bejövő üzenet. Fogadó módban az "A" gomb lenyomásával újra meg lehet tekinteni a legutóbb beérkezett üzenetet.

Fogadó módból a "B" gomb lenyomásával lehet átváltani, ilyenkor egy ollószerű ikon jelenik meg egy másodpercre, ami a szerkesztést hivatott jelölni. Ezután indul a szövegszerkesztő mód, ahol a Micro Bit balra-jobbra (az X koordináta mentén) döntögetésével tudunk az angol ábécé betűin lépegetni. A Micro Bit lefele döntésével (az Y koordináta mentén) tudjuk a képernyőn éppen megjelenő betűt az üzenetünk végére beszúrni, ilyenkor egy pipa ikon jelenik meg a kijelzőn egy másodpercre). Az utolsó betű törlésére a Micro Bit felfele döntésével (az Y koordináta mentén) van mód, ilyenkor egy balra mutató nyíl jelenik meg a kijelzőn egy másodpercre. A szerkesztés alatt álló üzenetet bármikor megtekinthetjük ebben a módban az "A" gomb lenyomásával. A szerkesztő módból a "B" gomb ismételt megnyomásával léphetünk ki; az üzenetünket ilyenkor küldi el a Micro Bit a másik/többi eszköznek - ezt egy animáció is jelzi (alulról felfele mozgó nyíl). Ezután a program visszaáll fogadó módba.

Ha a szerkesztő/küldő módból küldés nélkül akarunk visszalépni fogadó módba, töröljük betűnként az üzenetet, vagy indítsuk újra a Micro Bit-et a reset gomb segítségével (ilyenkor természetesen a legutóbb fogadott üzenet is törlődik).

Ha a szerkesztő módban érkezik üzenet, azt hangjelzés és a bejövő üzenetet jelölő animáció jelzi, de az üzenet nem jelenik meg a kijelzőn ilyenkor; a fogadó módba átlépve viszont az "A" gomb lenyomásával elolvasható a legutóbbi bejövő üzenet.
