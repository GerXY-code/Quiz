Funkcionális Specifikáció
==========================

Áttekintés
-----------
 - A projektben a célunk az, hogy létrehozzunk egy ingyenes, többcélú webes felületet, melyet tanárok, diákok, magánemberek vagy akár cégek is tudnak használni kvízek kitöltésére.
 - A kvízek célja kizárólag oktatást, illetve szórakozást szolgálhat csak, illetve ezek kitöltését nem korlátozhatja semmi.
 - A kérdőíveket teljes mértékben adatbázisban szeretnénk tárolni, hogy bárhonnan bárki, a megfelelő hozzáférési adatokkal, hozzáférhessen különböző eszközökről.

Jelenlegi helyzet
------------------

 Jelenlegi helyzet alapján, egy csomó iskolában még hagyományosan, papíralapon töltenek ki dolgozatokat, röpdolgozatokat, illetve kártyajátékok formájában különböző kvízeket. Ezzel az alkalmazással kihasználjuk azt, hogy manapság már mindenkinek van okostelefonja, és onnan is könnyedén kitöltheti a kiválasztott kvízeket.
 - Privát kvízek
 - Publikus kvízek
   - Erre azért lehet szükség, mert akár egy kisebb fős baráti társaság egymás között szeretnének csak játszani, akkor a privát jellegét megkell tartani az alkalmazásnak.

Követelménylista
-----------------
| Modul | ID | Név | version | Kifejtés |
| :---: | :---: | :---: | :---: | :--- |
| Jogosultság | KJ1 | Bejelentkezés | 1.0 | A felhasználó belép a megfelelő adatok bevitelével. |
| Jogosultság | KJ2 | Regisztráció | 1.0 | A felhasználó a nevének, email címének és jelszavának bevitelével regisztrálhatja magát. |
| Felület | KF1 | Bejelentkezési felület | 1.0 | A felhasználók itt tudnak bejelentkezni a rendszerbe. |
| Felület | KF2 | Regisztrációs felület | 1.0 | Felhasználók itt tudnak regisztrálni a rendszerbe. |
| Felület | KF3 | Kvíz kiválasztás | 1.0 | A felhasználó kiválaszt egy kvízt, amelyre el szeretné küldeni a válaszait. (Vagy be kell írnia egy kódot, amivel be tud csatlakozni, mint quizizzen?) |
| Felület | KF4 | Kvíz megoldása | 1.0 | A felhasználó elkezdi megoldani az adott kvízt. Minden elindított kvízjáték alatt egy kérdésre csak egyszer válaszolhat. |
| Felület | KF5 | Kvíz készítése | 1.0 | A felhasználó itt készíthet saját kvízeket. Több kérdést is hozzáadhat, melyeknek különböző típusú válaszlehetőségei lehetnek. Akkor tekintunk egy kvízt késznek, ha minden kérdésre adott a felhasználó megoldást. |
| Felület | KF6 | Kvíz szerkesztése | 1.0 | Ezen a felületen végezhet a felhasználó módosításokat a meglévő kvízeihez, illetve törölheti azokat. (Le is tölthetné őket?)|
| Felület | KF7 | Saját profilom | 1.0 | Ezen a felületen végezhet a felhasználó módosításokat a felhasználói fiókjával kapcsolatosan, illetve törölheti is azt |
| Felület | KF8 | Kvízeim | 1.0 | Ez a fő felülete a kvízek létrehozására, saját kvízek módosítására illetve törlésére (ezek a felületek innen érhetőek el) |


Jelenlegi üzleti folyamatok modellje
-------------------------------------
1.1 A kvízeket bárki kitölthet (a kód tudatában):
	1.2 A megoldás helyszíne lehet a felhasználó otthona, iskolában vagy munkahelyen.

Igényelt üzleti olyamatok modellje
------------------------------------
 - Regisztráció és Bejelentkezés
   - A felhasználó regisztrál az oldalra, ha még nincs fiókja
   - Megadott mezőket kitölti, (e-mail cím, felh.név és jelszó, illetve szükség esetén avatar képet is tud feltölteni)
   - Sikeres regisztrációt követően már bejelentkezhet az oldalra
 - Főoldal
   - A főoldalon tud számos publikus kvíz közül választani kategóriákra lebontva
   - A privát kvízek indítására a navigációs sávban lesz lehetőség, itt kód megadásával tud majd csatlakozni
   - A főoldalon lévő navigációs sáv tartalmazza majd a "Saját profilom", a "Kvízeim", a "Privát kvízhez csatalakozás" és a "Kijelentkezés" menüpontokat
     - Saját profilom
	   - A felhasználó itt tudja módosítani a fiókját mint pl: Avatar kép, felh.név, jelszó, illetve tudja törölni is azt
	 - Kvízeim 
	   - A felhasználó ezen menüponton belül tudja megtekinteni az általa kitöltött illetve létrehozott kvízeket
	   - Továbba itt tud létrehozni új kvízt, vagy egy meglévőt törölni, illetve módosítani
 - Kvízek létrehozása és azok központi tárolása.
     - A felhasználó kiválasztja a kvíz kategóriáját, megírja a kérdéseket, megírja hozzá a válaszokat és elmenti
	 - Időkorlát megadása minden kérdéshez => A kvíz készítésekor meg kell adni egy időlimitet, aminek szintén lesz egy maximális limitje (pl: 60 másodperc).
 - Tárolása
     - Minden kitöltött kvíz eredményének, illetve felhasználó válaszainak tárolása.


Használati esetek
------------------
 - Felhasználók
   - Superuser
   - Admin
   - Normál felhasználó
 - Szerepkörök
   - Superuser 
        - Ő rendelkezik minden jogosultsággal, adatbázison belül és a weboldalon belül egyaránt
		- Törölhet felhasználót
		- Törölheti bármelyik kvízt (akár privátot is)
		- Felhasználó jogosultsági szintjét növelheti illetve csökkentheti
   - Admin 
        - Az jogosultsági köre már szűkebb
		- kvízeket törölhet 
		- Létrehozhat kvízt
		- Saját fiókját törölheti/szerkesztheti
   - Normál felhasználó 
        - Csak a regisztrációra és a kvízek kitöltésére és létrehozására jogosult
		- Létrehozhat kvízt
		- Saját kvízeit törölheti
		- Saját fiókját törölheti/szerkesztheti
 
  Megj.: természetesen egy nem bejelentkezett (vendég) felhasználó semmilyen jögkörrel nem szerepelhet az oldalon.
 
Képernyőtervek
------------------

Forgatókönyvek
------------------

 - Regisztráció: A felhasználó megadja a bejelentkezési adatait. Bejelentkezés után megadhat néhány további adatot. Ezt a Profil menü alatt teheti meg.
 - Bejelentkezés: A felhasználó megadja a bejelentkezési adatatait. Ha helyes a megadott jelszó és felhasználónév, akkor tovább enged a rendszer. Ellenkező esetben a rendszer kiír a problémának a megfelelő hibaüzenetet.
 - Kvíz kitöltése: A felhasználó megadja a kvíz bejelentkezési kódját, vagy választ egyet a publikusak közül. Értelemszerűen kitölti azokat, amennyiben szükséges megad további információkat. A kitöltés végeztével a rendszer automatikus kiértékelés után közli a felhasználóval az eredményét.
 - Kvíz létrehozása: A felhasználó létrehozhat kvízt, ahol megadhat témakört, kérdéseket, válaszokat, illetve megadhatja, hogy ez publikus vagy privát kvíz legyen-e. Ha publikus lesz, akkor bárki kitöltheti, ha privát, akkor csak a kóddal rendelkező felhasználók.
 

Vágyálomrendszer
------------------

Fogalomszótár
------------------