import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, FormsModule], // Add FormsModule here
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})

export class OverviewComponent {
  searchQuery: string = ''
  
  faq = [
    {
      "title": "Wat is de rol van de sociale dienst bij financiële ondersteuning?",
      "content": "De sociale dienst van UHasselt biedt ondersteuning bij diverse financiële, sociale en administratieve uitdagingen. Studenten kunnen er terecht voor advies over studietoelagen, tussenkomsten in studiekosten, gespreide betalingen voor laptops, uitleenlaptops, Limburgse studieleningen en het groeipakket. Let op: studenten moeten zelf contact opnemen; informatie wordt niet gedeeld met derden zonder aanwezigheid van de student."
    },
    {
      "title": "Voor wie is de financiële ondersteuning bedoeld?",
      "content": "Alle studenten van UHasselt kunnen terecht bij de sociale dienst voor advies en ondersteuning. De student zelf moet aanwezig zijn bij afspraken of zelf contact opnemen via telefoon of e-mail."
    },
    {
      "title": "Hoe kan ik contact opnemen met de sociale dienst?",
      "content": "De sociale dienst is bereikbaar via e-mail op socialedienst@uhasselt.be of liesbeth.huber@uhasselt.be en telefonisch op +32 (0)11 26 80 64. Openingsuren zonder afspraak zijn beschikbaar op de agenda van beide campussen. Voor meer informatie, bezoek de [contactpagina](/contact)."
    },
    {
      "title": "Wat is een studietoelage van de Vlaamse overheid?",
      "content": "Een studietoelage is een financiële steun van de Vlaamse Gemeenschap om studiekosten te helpen dragen."
    },
    {
      "title": "Wat zijn de voorwaarden voor een gespreide betaling van een laptop?",
      "content": "Voorwaarden zijn: ingeschreven zijn als student aan UHasselt voor minstens 27 studiepunten (uitgezonderd diplomajaren), voldoen aan de nationaliteits- en studievoorwaarden zoals gehanteerd door de dienst studietoelage van de Vlaamse Overheid. Aanvragen voor academiejaar 2024-2025 kunnen vanaf 19 augustus 2024 worden ingediend, zolang de voorraad strekt."
    },
    {
      "title": "Hoe vraag ik een gespreide betaling voor een laptop aan?",
      "content": "1. Bestel je laptop via je studentendossier. 2. Download en onderteken het aanvraagformulier (studentenvoorzieningen -> formulieren). 3. Stuur het formulier samen met de factuur naar socialedienst@uhasselt.be. Let op: start geen afbetaling zonder goedkeuring van de sociale dienst; anders wordt de aanvraag geweigerd."
    },
    {
      "title": "Wat is een uitleenlaptop en hoe vraag ik die aan?",
      "content": "In uitzonderlijke en tijdelijke situaties waarin je geen laptop kunt aanschaffen, kun je een uitleenlaptop aanvragen voor een bepaalde duur. Aanvragen verlopen via je studentendossier onder Studentenvoorzieningen > Formulieren."
    },
    {
      "title": "Wat is een tussenkomst in studiekosten en wie komt in aanmerking?",
      "content": "UHasselt biedt jaarlijks één aanvraagmogelijkheid voor een tussenkomst in studiekosten. Voorwaarden zijn onder andere: ingeschreven zijn voor minstens 27 studiepunten (uitgezonderd diplomajaren) en voldoen aan de nationaliteits- en studievoorwaarden van de Vlaamse Overheid. Ook studenten zonder recht op een studietoelage kunnen in aanmerking komen. Aanvragen voor academiejaar 2024-2025 kunnen tussen 1 november 2024 en 1 juli 2025 worden ingediend."
    },
    {
      "title": "Hoe wordt de tussenkomst in studiekosten berekend?",
      "content": "Het bedrag van je studietoelage (kan 0 zijn) wordt beschouwd als je studie-inkomst. Er wordt een raming gemaakt van je verplichte studiekosten. Als deze kosten hoger zijn dan je studie-inkomst en je referentie-inkomen onder de maximum inkomensgrens van UHasselt valt, heb je recht op een tussenkomst. Het percentage van de tussenkomst varieert tussen 45% en 75%, afhankelijk van je categorie gebaseerd op punten leefeenheid en referentie-inkomen."
    },
    {
      "title": "Wat is het Fonds voor Limburgse studieleningen?",
      "content": "Dit fonds biedt renteloze studieleningen aan studenten die in Limburg studeren of wonen en elders studeren. Leningen variëren van €500 tot €3.000 per academiejaar, met een maximum van €12.000 over alle jaren. Aanvragen kunnen doorlopend tussen 1 september en 31 augustus worden ingediend. Contact: studielening@limburg.be."
    },
    {
      "title": "Wat is het Hubertus Fonds?",
      "content": "Het Hubertus Fonds biedt financiële ondersteuning tot €1.500 aan Belgische of gelijkgestelde studenten vanaf het tweede bachelorjaar voor activiteiten die hun kennis, competenties of talenten ontwikkelen, zoals (inter)nationale competities, stages en uitwisselingsprojecten. Aanvragen worden behandeld op 1 november en 1 april. Contact: hubertusfonds@uhasselt.be."
    },
    {
      "title": "Zijn er andere nuttige financiële weetjes?",
      "content": "Ja, bijvoorbeeld de mogelijkheid tot vermindering van onroerende voorheffing als huurder. Voor meer informatie kun je contact opnemen met de sociale dienst."
    }
  ];

  get filteredFaq() {
    return this.faq.filter(
      (item) =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}

