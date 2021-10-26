import React from "react";
import LayoutExternal from "./layout-external";

const body = {
  textAlign: "center",
  backgroundColor: "#d4d4d4",
};

const container = {
  marginLeft: "auto",
  marginRight: "auto",
  width: "40em",
  textAlign: "left",
  backgroundColor: "#f2f2f2",
  borderColor:"#d4d4d4",
  borderRadius:10,
};

const marginpading = {
  
  padding:10,
  paddingTop:100,
  
}

export default function PageCGU() {
  return (
    <LayoutExternal>
        <div style={body}>
        <div style={container}>
        <div style={marginpading}>
          <h1>CGU</h1>
          <div dangerouslySetInnerHTML={{ __html: htmlPart }} />
          </div>
        </div>
    </div>
      </LayoutExternal>
  );
}

const htmlPart = `<div className={classes.paper}>
      <h1>CONDITIONS GENERALES DE VENTE DE LA SOCIETE AUDIT VIRTUEL</h1>

<h2>ARTICLE 1 - PRÉAMBULE</h2>
<p>AUDIT VIRTUEL a pour activité la conception, le développement, l'édition, la distribution et la maintenance de logiciels destinés aux professionnels du bâtiment. Les présentes Conditions Générales de Vente ont pour objet de définir les conditions dans lesquelles AUDIT VIRTUEL fournit au Client le Produit visé au sein de l'offre à laquelle il a souscrit, quel que soit le canal de vente (notamment via le Site Internet, courrier postal ou électronique (courriel). Les obligations relatives à la conformité du Produit à ses spécifications contractuelles et sa documentation, ainsi qu'à son fonctionnement, sont prévues au sein de la Licence ou Conditions particulières associées au Produit. En cas de contradiction entre les clauses des présentes Conditions Générales et les clauses de la Licence ou Conditions particulières, ces dernières prévaudront.</p>

<h2>ARTICLE 2 – DÉFINITIONS</h2>
<p>Les termes et expressions suivants ont, sauf précision contraire, le sens qui leur est donné ci-dessous s'ils apparaissent avec leur première lettre en majuscule, qu'ils soient au singulier ou au pluriel dans les présentes Conditions Générales ou dans tout autre document émanant de la Société :
Société : désigne la société AUDIT VIRTUEL<br>
Site Internet : désigne le(s) site(s) Internet consultable(s) à l'adresse <a href="https://auditvirtuel.com">auditvirtuel.com</a> ou tout autre sous-domaine. Client : désigne la personne ayant souscrit au Produit et qui est responsable du paiement du prix.
Produit : désigne un logiciel ou service proposé par la Société.
Conditions Générales ou Contrat : désigne l'ensemble des droits et obligations des parties concernant le Produit et décrits dans les présentes Conditions Générales de Vente.
Licence ou Conditions Particulières : désigne le document définissant les conditions d'utilisation d'un Produit. Utilisateur : désigne la personne utilisant le Produit.
Version Électronique : désigne le Produit livré sous forme d'un fichier immatériel téléchargeable ou visualisable via le Site Internet.</p>

<h2>ARTICLE 3 - ACCEPTATION DES CONDITIONS GÉNÉRALES</h2>
<p>L'accès et l'utilisation du Produit sont soumis à l'acceptation et au respect des présentes Conditions Générales par le Client. Toute utilisation du Produit vaut acceptation sans réserve par le Client des présentes Conditions Générales. Les présentes Conditions Générales prévalent sur tout autre document qui aurait été communiqué à la Société.
Le fait pour la Société de ne pas se prévaloir à un moment donné de l'une quelconque des clauses des présentes Conditions Générales, ne peut être interprété comme valant renonciation à se prévaloir ultérieurement de l'une quelconque des dites clauses.
La Société se réserve la possibilité d'adapter ou de modifier les Conditions Générales. Toute nouvelle version des présentes Conditions Générales sera publiée sur le Site Internet. Les Conditions Générales applicables sont celles en vigueur lors de la commande, sauf modification légale ou réglementaire. En cas de renouvellement d'une commande, seront alors applicables les Conditions Générales en vigueur à cette date.</p>

<h2>ARTICLE 4 - CAPACITÉ JURIDIQUE</h2>
<p>La vente et l'utilisation du Produit sont réservées aux professionnels. Par conséquent, le Client atteste être une personne majeure agissant à titre professionnel et disposer de la capacité nécessaire à la conclusion et à l'exécution du présent Contrat. S'il agit pour le compte d'une personne morale, le Client atteste être le représentant légal ou disposer d'un mandat de la personne morale concernée pour conclure le Contrat.
Même si le Client n'est pas Utilisateur du Produit, il reste seul responsable et se porte fort du respect du Contrat par tout Utilisateur du Produit.<p>

<h2>ARTICLE 5 - DESCRIPTION ET CHOIX DU PRODUIT</h2>
<p>Les offres de Produit proposées par la Société sont décrites sur le Site Internet.<br>
Le Client est seul maître du choix du Produit et de son adéquation à ses besoins. La Société n'assume aucune responsabilité de ce fait. Il incombe au Client de solliciter auprès de la Société toutes informations et renseignements complémentaires sur les caractéristiques du Produit ou son utilisation. Le Client après avoir pris connaissance du descriptif du Produit et vérifié sa compatibilité, en fonction de ses autres équipements (matériels, logiciels, configurations, etc.) et de ses besoins tels qu'il les a déterminés, enregistre sa commande sous sa propre responsabilité.<p>

<h2>ARTICLE 6 - COMMANDE - FORMATION DU CONTRAT</h2>
<p>L’exécution de nos services se réalise en plusieurs étapes :<br>
<ul>
<li>Création par le Client d’un compte à l'adresse <a href="https://auditvirtuel.com">auditvirtuel.com</a> en complétant les informations demandées dans le formulaire. Cela entraîne la création de son espace client ;</li>
<li>Souscription à un Produit, le Client doit adresser à la Société, par courriel, ou directement depuis son espace client, un ordre de service complété ;</li>
<li>Dès réception, le Client reçoit par courriel, à l'adresse indiquée lors de sa commande, une attestation d'enregistrement de sa commande ;</li>
<li>Exécution de la prestation permettant la livraison du Produit par un de nos prestataires indépendant ou non, à distance ou au lieu de situation du bien immobilier objet du Service. Dans l’hypothèse d’une exécution sur place, le Client s’engage à accueillir le prestataire dans un lieu propre et rangé pour permettre l’exécution immédiate de la prestation ; - Livraison du Service sous forme de fichier immatériel, disponible sur le compte client du Client.</p>
</ul>

<h2>ARTICLE 7 - PRIX, PAIEMENT ET FACTURATION</h2>
<h3>Prix</h3>
<p>Le prix des Produits est indiqué sur le Site Internet. Les prix s'entendent hors taxes. La TVA sera facturée en sus.
La Société se réserve le droit de modifier ses prix à tout moment mais le Produit sera facturé sur la base des tarifs en vigueur au moment de la commande du Client. En cas de renouvellement d'une commande, le prix sera celui en vigueur sur le Site Internet au jour du renouvellement.
Tout changement de taux de TVA sera répercuté sur le prix TTC des Produits.<br>
Pour tous les Produits fournis hors Union Européenne le prix sera calculé hors taxe sur la facture. Le Client est responsable de la déclaration et du paiement de la TVA, taxes locales, droits d'importation ou autres taxes d'état exigibles dans son pays. Ces droits et sommes ne relèvent pas du ressort de la Société.</p>
<h3>Facturation et paiement</h3>
<p>La commande n'est validée et n'est considérée comme ferme qu'à compter de la réception par la Société d'un moyen de paiement valide et du complet paiement du prix. Les moyens de paiement acceptés sont le chèque, la carte bancaire, le prélèvement sur carte bancaire et le virement bancaire. En cas de paiement par chèque, la commande n'est validée qu'à la réception du chèque et complet paiement du prix. En choisissant un ou des services à paiement récurrents, le Client autorise la société AUDIT VIRTUEL à réaliser de manière récurrente des prélèvements sur carte bancaire ou sur compte bancaire suivant le moyen de paiement fourni. Pour chaque commande, la facture est adressée au Client par courriel à l'adresse indiquée lors de la commande, dans les huit (8) jours ouvrables suivant l'enregistrement de la commande. Le Produit sera facturé même s'il n'est pas utilisé par le Client.
Tout impayé, rejet, retard de paiement même partiel non justifié d'une seule facture ou échéance entraîne de plein droit : - L'application de pénalités de retard calculées depuis le lendemain de la date d'échéance de la facture jusqu'à son complet règlement et égales au taux appliqué par la banque centrale européenne (BCE) à son opération de refinancement en vigueur au moment de l'application de la présente clause majoré de 10 points de pourcentage.<br>
- L'application d'une indemnité forfaitaire pour frais de recouvrement d'un montant de quarante (40) euros et ce, sans préjudice de tout autre droit ou recours dont dispose la Société. Dans le cas où les frais de recouvrement exposés seraient supérieurs au montant de cette indemnité forfaitaire, la Société pourra demander une indemnisation complémentaire, sur justification (article L441-6 du Code de commerce).<br>
- La suspension de tout ou partie des services associés au compte client.<br>
La Société pourra également résilier le Contrat dans les conditions visées à l'article « Durée et résiliation ».</p>

<h2>ARTICLE 8 - LIVRAISON</h2>
<p>Les Produits commandés en Version Électronique sont accessibles au Client directement sur le Site Internet ou par téléchargement, en utilisant les identifiants fournis par Société après validation de la commande.
Le ou les Fichiers résultant de(s) Service(s) sont livrés au Client via sa/leur mise à disposition sur leur compte dédié, créé au moment de la première commande, dans le délai stipulé à la clause 4.1.
Il convient de rappeler que le support des Fichiers est immatériel et électronique. Aucun autre format ne sera communiqué (ex : papier, CD ROM ou clé USB).</p>

<h2>ARTICLE 9 - ZONE GÉOGRAPHIQUE DE LIVRAISON</h2>
<p>La Société livre les Produits en Version Électronique partout où le réseau Internet permet le téléchargement complet ou la visualisation de ses fichiers.</p>

<h2>ARTICLE 10 - VÉRIFICATION DES PRODUITS LIVRÉS.</h2>
<p>Il appartient au Client ou à la personne réceptionnant un produit AUDIT VIRTUEL de vérifier la conformité du Produit au moment de la livraison. Toute réserve ou réclamation sur les vices apparents ou sur la non-conformité du Produit livré devra être signalée par le Client dans les trois (3) jours à compter de la date de livraison du Produit, en envoyant à la Société<br>
- soit un courriel à l'adresse : service.client@auditvirtuel.com<br>
- soit une lettre recommandée avec avis de réception à l'adresse : AUDIT VIRTUEL, 43, rue Dulong -75017 PARIS -<br>
FRANCE. La date du cachet de la Poste faisant foi.<br>
A défaut de réclamation effectuée dans le délai précité, les Produits livrés seront réputés conformes et acceptés par le Client.</p>

<h2>ARTICLE 11 - DÉLAI DE RÉTRACTATION</h2>
<p>Dans la mesure où le Contrat est conclu par le Client pour les besoins de son activité professionnelle, les dispositions du Code de la consommation ne sont pas applicables et le Client ne peut donc en aucun cas bénéficier d'un droit de rétractation.</p>

<h2>ARTICLE 12 - DURÉE ET RÉSILIATION</h2>
<h3>Durée du Contrat</h3>
<p>Le Contrat entre en vigueur à compter de la validation de la commande par AUDIT VIRTUEL. Il est conclu pour une durée d'un (1) an et se renouvelle tacitement chaque année, à la date anniversaire, pour une durée identique. Tout paiement d'avance vaut engagement ferme.</p>
<h3>Résiliation sans faute</h3>
<p>Le Client peut résilier le Contrat à tout moment en adressant sa demande de résiliation par voie postale à la Société, à l'adresse figurant en tête des présentes. La résiliation sera prise en compte dès réception de la demande du Client.
La Société pourra également mettre fin au Contrat dans l'hypothèse où elle déciderait d'arrêter le Produit pour tout motif légitime tenant notamment à des considérations économiques ou à l'état du marché. Le cas échéant, le Client en sera informé au moins deux (2) mois avant l'arrêt effectif du Produit.</p>
<h3>Résiliation pour faute</h3>
<p>Tout non-respect par l'une des parties de ses obligations peut justifier la résiliation du Contrat par l'autre partie.
Dans ce cas, la partie qui souhaite résilier le Contrat devra mettre l'autre partie en demeure de respecter ses engagements. Si, à l'expiration d'un délai de quinze (15) jours à compter de la date d'émission de la mise en demeure, l'autre partie ne s'est pas conformée à ses obligations, alors le Contrat sera résilié de plein droit par l'envoi d'une seconde notification. Par dérogation à l'alinéa précédent, dans le cas où la nature des engagements non respectés rendrait impossible pour la partie défaillante de remédier à ses obligations, le Contrat se trouvera résilié de plein droit immédiatement après la constatation du manquement sans autre formalité que l'envoi à la partie défaillante d’un courrier électronique mentionnant la présente clause.</p>
<h3>Conséquences de la cessation du Contrat</h3>
<h4>- Paiement</h4>
<p>Si le Client est lié par une période d'engagement, alors le paiement des sommes restant dues jusqu'au terme de cette période devra être acquitté dans son intégralité.</p>
<h4>- Données du Client</h4>
<p>Le Client reconnaît par ailleurs qu'en cas de cessation du Contrat, ses données informatiques seront immédiatement et irrémédiablement supprimées des serveurs de la Société. Par conséquent, il appartient au Client de veiller à sauvegarder les données qu'il stocke via le Produit avant la cessation effective du Contrat. La Société ne pourra être tenue responsable de conséquences liées à la suppression des données du Client, notamment en cas de perte de données.</p>
<h4>- Licence</h4>
<p>La cessation du Contrat entraine de plein droit, sans qu'une notification soit nécessaire, la cessation de la Licence associé au Produit.</p>

<h2>ARTICLE 13 - MISE À JOUR DU PRODUIT</h2>
<p>Le Produit peut être mis à jour en cours de Contrat en fonction des évolutions techniques, légales ou réglementaires. En fonction de l'offre à laquelle il a souscrit, ses mises à jour peuvent être incluses dans le prix payé par le Client lors de la commande. A défaut, les mises à jour feront l'objet d'une facturation complémentaire.</p>
Les mises à jour du Produit sont effectuées par Internet. Le Client doit donc disposer d'une connexion à Internet pour en bénéficier.</p>

<h2>ARTICLE 16 - PROPRIÉTÉ INTELLECTUELLE</h2>
<p>La Société est titulaire des droits de propriété intellectuelle portant sur les éléments mis à disposition du Client dans le cadre du présent Contrat, notamment le Produit. Ces éléments sont mis à disposition du Client uniquement pour la durée du Contrat et pour les besoins d'exécution de l'objet du Contrat. La présentation et le contenu de ces éléments constituent, ensemble, une œuvre protégée par les lois en vigueur sur la propriété intellectuelle. Par conséquent, toute reproduction, intégrale ou partielle de ces éléments, est systématiquement soumise à l'autorisation préalable et écrite de la Société, sauf à être sanctionné, notamment au titre de la contrefaçon.
La mise à disposition du Produit n'emporte nullement cession des droits de la Société sur ledit Produit ou sur l’un quelconque de ses éléments, ni sur la documentation associée.
Le Client s'engage à ne pas porter atteinte, directement ou indirectement, ou par l'intermédiaire de tiers, aux droits de la Société sur les Produits et services qu'elle propose.
Notamment, le Client s'interdit toute adaptation, modification, transformation, décompilation, analyse fonctionnelle ou arrangement du Produit, pour quelque raison que ce soit, sauf dans la limite de ce que permet le Code de la propriété intellectuelle.</p>

<h2>ARTICLE 17 - NON-CONCURRENCE</h2>
<p>Le Client s'interdit de développer ou d'exploiter pour son compte ou pour le compte de tiers un produit concurrent du Produit qui lui est fourni par la Société.<br>
Cette obligation de non-concurrence s'applique pour la durée du Contrat et pour une durée d'un (1) an à l'issue du Contrat quelle qu'en soit la raison. Elle est limitée à l'interdiction pour le Client de développer ou exploiter un produit concurrent du Produit, directement ou indirectement, pour son compte ou pour le compte de tiers intervenant sur le territoire français.</p>

<h2>ARTICLE 18 - UTILISATION DU PRODUIT</h2>
<p>Le Client s'engage à utiliser le Produit de la Société dans le respect des législations et réglementations et de la Licence applicable au Produit, et s'interdit de porter atteinte aux droits des tiers. En outre, il est rappelé que l'utilisation du Produit est faite sous la seule responsabilité du Client et que le Client est seul responsable des données qu'il transfère, stocke ou télécharge grâce au Produit. La Société n'est pas tenue d'effectuer une quelconque vérification à ce titre. Le Client s'engage à utiliser le Produit personnellement et à ne pas le mettre à la disposition de tiers, sauf dans la limite de ce que permet le Produit à ses préposés s'il est une personne morale. Le cas échéant, la mise à disposition est effectuée sous la responsabilité du Client. Conformément aux dispositions légales et réglementaires en vigueur, le Client s'interdit de procéder à toute copie autre que celles autorisées dans le cadre de la législation et à tout acte susceptible de porter atteinte aux droits des auteurs, de leurs ayants droit ou de la Société.<br>
L'utilisation du Produit est subordonnée à l'acceptation préalable par le Client, de la Licence applicable, laquelle est jointe au Produit sous forme de fichier électronique. Si le Client n'accepte pas la Licence, alors il ne peut utiliser le Produit. De convention expresse, l'utilisation du Produit sur un matériel informatique vaudra acceptation sans réserve de la Licence. S'il utilise le Produit, alors le Client s'engage à respecter la Licence applicable. Au titre de cette Licence, et sauf clauses contraires indiquées au sein de la Licence applicable au Produit concerné, le Client bénéficie d'un droit d'utilisation personnel et non cessible du Produit, pour la durée du Contrat.</p>

<h2>ARTICLE 19 – RESPONSABILITÉ ET GARANTIE</h2>
<p>La Société n'est tenue à l'égard du Client qu'à une obligation de moyens et ne fournit aucune garantie, expresse ou implicite, y compris, toute garantie de qualité et d'adéquation à un usage particulier du Produit fourni au Client et toute garantie par rapport aux informations et données pouvant être obtenues via le Produit, notamment quant à leur exactitude et leur fiabilité.<br>
La Société est responsable des dommages corporels et matériels causés au Client qui résulteraient d'une faute de sa part mais ne peut en aucun cas être tenue responsable, quel que soit le type d'action en responsabilité engagée, même si la Société a été informée de leur possible survenance, sauf règle légale ou impérative contraire, des dommages immatériels et/ou parfois qualifiés d'indirects, accessoires, spéciaux y compris les dommages résultant d'une perte de profits, de manque à gagner, de perte de données ou de privation d'usage subis par le Client ou par un tiers.<br>
En tout état de cause, à l'exception des dommages corporels causés aux personnes, la responsabilité pécuniaire de la Société sera limitée au montant du prix hors taxes payé par le Client en contrepartie du Produit à l'origine du dommage pour l'année au cours de laquelle le dommage se produit.<br>
Cette clause sera appliquée sous réserve des dispositions contraires prévues par certaines législations. Dans ce cas, la responsabilité sera limitée dans la mesure permise par la loi applicable.<br>
Le Client est invité à souscrire à ses frais une assurance appropriée à sa situation particulière s'il souhaite être indemnisé pour tout dommage ou perte que lui et/ou ses clients pourraient subir au-delà du montant visé ci-dessus.</p>

<h2>ARTICLE 20 – DONNÉES PERSONNELLES</h2>
<p>La Société demande à tout Client de communiquer un certain nombre d'informations personnelles (nom, prénom, adresse électronique, numéro de téléphone, ...). Ces informations sont destinées à la prise en compte de la commande du Client, à l'exécution du Contrat par la Société ou ses partenaires ou sous-traitants, et de toutes suites qui pourraient en résulter. Ce traitement de données personnelles est réalisé sous la responsabilité de la Société.<br>
Le Client s'engage à ne pas transmettre à la Société des données à caractère personnel faisant apparaître, directement ou indirectement, les origines ethniques, les opinions politiques, philosophiques ou religieuses ou l'appartenance syndicale des personnes, ni des données relatives à la santé ou à la vie sexuelle de celles-ci.<br>
Les données concernant le Client sont conservées sous une forme permettant l'identification des personnes concernées pendant une durée qui n'excède pas la durée nécessaire aux finalités pour lesquelles elles sont collectées et traitées. Les données à caractère personnel ne sont accessibles qu'aux personnels habilités.<br>
Le Client est informé de ce que les données à caractère personnel signalées comme étant obligatoires sur les formulaires et recueillies dans le cadre du Contrat sont nécessaires à l'utilisation du Produit, utilisées uniquement dans le cadre de ce Produit et destinées exclusivement à la Société et à ses partenaires et sous-traitants en charge de l'exécution du Contrat. En conséquence, la Société pourra transmettre l'ensemble des données personnelles concernant le Client à toute personne devant être légitimement destinataire des informations ou tout partenaire ou sous-traitant de la Société qui aurait besoin de ses informations pour effectuer les opérations dont il a été chargé par la Société (notamment maintenance, assistance, hébergement, etc.). Aussi, tout ou partie de vos données personnelles pourraient être transmises vers des pays situés en dehors de l'Union Européenne. Dans les formulaires de collecte de données à caractère personnel, le Client est notamment informé : de l'identité du responsable de traitement, de ses droits sur les données à caractère personnel, des destinataires, de la finalité du traitement et du caractère obligatoire ou facultatif de ses réponses.<br>
Les prospections commerciales par voie électronique que la Société serait susceptible d'envoyer au Client répondent aux principes suivants<br>
- le Client a exprimé son consentement et a été informé, lorsqu'il a communiqué ses données à caractère personnel, de la possibilité de s'opposer gratuitement à toute utilisation commerciale de ses coordonnées,<br>
- l'objet de la sollicitation est en rapport avec les fonctions exercées à titre professionnel par le destinataire du<br>
message.<br>
Le Client bénéficie d'un droit d'opposition, d'accès et de rectification des données qui le concerne et qu'il peut exercer en adressant un message à l'adresse électronique suivante : service.client@auditvirtuel.com<br>
Dans le cadre de l'utilisation du Produit, le Client peut être amené à transmettre à la Société des données personnelles relatives à des tiers. Dans ce cas, le Client s'engage à obtenir le consentement préalable et exprès de ces personnes, concernant la transmission et le traitement par la Société desdites données. Le Client s'engage également à notifier à ces personnes les éléments repris ci-avant, en particulier les droits dont ils disposent ainsi que les modalités d'exercice de ces droits.<br>
A cet égard, il est précisé que les tiers peuvent exercer leur droit d'opposition, d'accès et de rectification des données qui les concernent en adressant un message à cette fin à l'adresse électronique suivante : service.client@auditvirtuel.com</p>

<h2>ARTICLE 21 - FORCE MAJEURE</h2>
<p>On entend par force majeure tout évènement imprévisible, irrésistible et indépendant de la volonté des parties.<br>
En outre, par dérogation à l'article 1148 du Code civil, est contractuellement considérée comme cas de force majeure, même si elle ne répond pas à la définition de force majeure et sans qu'il soit besoin de l'établir, toute situation empêchant l'exécution du Contrat et à laquelle il n'est pas possible de résister par des diligences normales, notamment, mais pas exclusivement : expropriation, toute forme d'intervention gouvernementale, embargos, guerre, hostilités, terrorisme, sabotage, émeutes, déluge et toute situation climatique inhabituelle, épidémie, feu, explosions ou autre catastrophe, les événements d'interruption, panne, sabotage des moyens de télécommunication, problèmes liés au réseau de communication électronique, ne pouvant pas être raisonnablement anticipée.<br>
Aucun défaut d'exécution par les parties ne peut constituer un manquement de nature à engager sa responsabilité contractuelle ou ouvrir droit à des dommages et intérêts si ce défaut est causé par un cas de force majeure ou un cas visé dans la liste ci-dessus notifié immédiatement par la partie affectée à l'autre partie.<br>
Au cas où un événement de force majeure ou un événement visé dans la liste ci-dessus, rend impossible l'exécution du Contrat par l'une des parties d'une partie substantielle de ses obligations pour une période supérieure à un (1) mois, chaque partie pourra notifier immédiatement à l'autre la résiliation du Contrat.</p>

<h2>ARTICLE 22 - RÉFERENCES</h2>
<p>Pendant la durée du Contrat, le Client autorise expressément la Société à faire apparaître sa dénomination et/ou son enseigne accompagnée de son logo sur les pages du Site Internet, ainsi que sur ses documents commerciaux afin de le faire figurer au rang des partenaires ayant fait confiance au Produit de la Société.</p>

<h2>ARTICLE 23 - IDENTIFICATION DE LA SOCIÉTÉ</h2>
<p>AUDIT VIRTUEL, société par actions simplifiées au capital de 5 000 Euro.<br>
Siège social : 43 rue Dulong, 75017 PARIS (FRANCE), immatriculée au Registre du Commerce et des Sociétés de PARIS sous le numéro XXX XXX XXX Adresse électronique : service.client@auditvirtuel.com</p>

<h2>ARTICLE 24 - SERVICE CLIENT</h2>
<p>Toutes demandes d'informations et/ou réclamations peuvent être présentées à la Société :<br>
- par courrier postal adressé au 43 rue Dulong, 75017 PARIS (FRANCE),<br>
- par téléphone au 02 53 35 40 64 (du lundi au vendredi de 9H30 à 12H et de14H30 à 17H); - par courrier électronique à l'adresse : service.client@auditvirtuel.com</p>

<h2>ARTICLE 25 - INDÉPENDANCE DES CLAUSES</h2>
<p>Si une clause des Conditions Générales est déclarée illégale, nulle ou inexécutable par un tribunal pour une raison quelconque, alors cette clause sera réputée dissociée des autres clauses et ne changera en rien la validité et l'opposabilité de ces autres clauses.</p>

<h2>ARTICLE 26 - DROIT APPLICABLE - LITIGE</h2>
<p>Les Conditions Générales sont régies par la loi française, à l'exclusion des règles de conflit. En cas de contestation sur la conclusion, l'interprétation, l'exécution ou la cession des présentes et à défaut d'accord amiable entre la Société et le Client, seuls seront compétents les tribunaux du siège social de la Société.</p>

<h2>CONTRAT DE LICENCE RELATIF A L'APPLICATION AUDIT 3D+</h2>
<p>Les services web sont mis à disposition par la société AUDIT VIRTUEL
LE PRESENT CONTRAT DE LICENCE S'APPLIQUE A L'APPLICATION AUDIT 3D+ AINSI QU'A SES SERVICES ASSOCIES. VOUS DEVEZ LIRE ATTENTIVEMENT LES TERMES DU CONTRAT DE LICENCE APPLICABLE
L'utilisation de l'application n'est pas gratuite. En fonction des termes exposés ci-dessous, AUDIT VIRTUEL peut vous accorder la permission d'utiliser sans frais un accès à l'application au seul titre d'évaluation pendant une période de 10 jour. Dans ce cas, cette version « démonstration » de l'application AUDIT 3D+ ne peut en aucun cas être utilisée pour la vente de vos produits, il s'agit d'une version à usage uniquement pédagogique.
Passé ce délai, vous devez acquérir une version enregistrée pour un seul utilisateur ou pour plusieurs utilisateurs. Reporter-vous au site https://auditvirtuel.com pour des renseignements relatifs aux prix, licences pour plusieurs utilisateurs et les options de commande des licences. Tous les accès enregistrés à AUDIT 3D+ donnent accès aux fonctionnalités de l'application, il est exclu l'accès au code source de l'application. Pour une description détaillée des fonctionnalités d'AUDIT 3D +, veuillez-vous reportez au site https://auditvirtuel.com.
Indépendamment du mode de commande que vous avez choisi, les conditions suivantes de licence s'appliquent uniquement à la relation entre AUDIT VIRTUEL et vous. Lisez attentivement les conditions suivantes avant d'utiliser, installer, distribuer ou transmettre AUDIT 3D+, sauf si vous avez un contrat de licence différent signé par AUDIT VIRTUEL. Le simple fait d'utiliser ou d'installer AUDIT 3D+ entraîne votre acceptation de cette licence. Si vous accepter cette licence, assurez-vous que vous acceptez toutes ses dispositions.
Conditions et informations relatives aux licences</p>

<h2>ARTICLE 1 - CONDITIONS D'UTILISATION</h2>
<p>Les dispositions de cette licence décrivent l'usage et les utilisateurs autorisés pour chaque accès donné sous licence AUDIT 3D+.
Toute utilisation du service en ligne AUDIT 3D+ est soumise aux dispositions des contrats de licence applicables, inclus dans le service (qui peuvent être consultés à l'adresse https://auditvirtuel.com), ainsi qu'aux informations relatives aux licences dans l'application AUDIT 3D+. L'utilisation de ce service est réservée à un usage professionnel. Toute reproduction ou représentation, en tout ou partie, sans notre accord, sur un quelconque support est interdite. Le non- respect de cette interdiction engage la responsabilité civile et pénale du contrefacteur. Les informations contenues ici sont non contractuelles et sujettes à modification sans préavis.
L'utilisation des Services Web (Notices en ligne, Vidéo de formation en ligne, Web Services, Assistance, Mises à jour) impose une connexion à Internet et d'utiliser des outils à jour (équipements informatiques et logiciels nécessaires au bon fonctionnement d'AUDIT 3D+).</p>

<h2>ARTICLE 2 - LICENCE MULTI-UTILISATEURS DE L'APPLICATION AUDIT 3D+</h2>
<p>Ce type de licence vous autorise à accéder et utiliser l’application AUDIT 3D+ au sein de votre entreprise à l'usage exclusif de vos employés. Le logiciel peut être utilisé par vos employés dans le monde entier, sous réserve des restrictions relatives à l'exportation des Etats-Unis. Vous n'êtes pas autorisé à donner, transférer ou vendre des accès sous licence multi- utilisateurs du logiciel AUDIT 3D+ à votre ou vos clients, ou à un tiers, ni à inclure ces accès dans ou avec les produits que vous vendez.
La licence multi-utilisateurs est accordée utilisateur par utilisateur. Sous réserve du nombre d’accès acquis par votre entreprise, les utilisateurs peuvent accéder au logiciel via le site https://auditvirtuel.com, en renseignant leur identifiant unique et mot de passe. Il ne s'agit pas d'une licence d'utilisation simultanée.
Une licence multi-utilisateurs pour le logiciel AUDIT 3D+ autorise votre entreprise à créer autant d’utilisateurs que nécessaire à des fins d’utilisation au sein de votre entreprise, conformément au contrat de licence applicable.</p>

<h2>ARTICLE 3 - DISTRIBUTION DU LOGICIEL</h2>
<p>Le logiciel multi-utilisateurs AUDIT 3D+ sera distribué par voie électronique au nom et à l'adresse électronique désignés par le client sur le formulaire ou le bon de commande.
Au moment de l'achat, ou sur accord du bon de commande par AUDIT VIRTUEL, l’utilisateur final recevra une confirmation par message électronique qui contiendra les liens et instructions nécessaires pour accéder et utiliser l’application AUDIT 3D+.</p>

<h2>ARTICLE 4 - ADMINISTRATEUR DES LICENCES DU LOGICIEL AUDIT 3D+</h2>
<p>Les licences multi-utilisateurs du logiciel AUDIT 3D+ doivent être gérées de façon centralisée au sein de votre entreprise ; un employé de votre entreprise doit donc jouer le rôle d'administrateur des licences et être le point de contact d’AUDIT VIRTUEL pour votre entreprise. Votre administrateur de licences est responsable de la distribution du logiciel AUDIT 3D+ et des mises à jour aux employés couverts par la licence, de l'ajout et la suppression d’utilisateurs si nécessaire et du contrôle du nombre d’utilisateurs sous licence de l'entreprise.</p>

<h2>ARTICLE 5 - GARANTIE, MAINTENANCE ET SUPPORT TECHNIQUE</h2>
<p>Un service d'assistance est fourni durant 1 mois à partir de la date de souscription. Ce service est constitué d'une assistance téléphonique. Les mises à jour du logiciel sont effectuées directement sur la plateforme Internet, le client doit donc posséder une connexion suffisante au réseau Internet pour en bénéficier.
Ces différents services (garantie, maintenance et support technique) concernent uniquement les anomalies et erreur de programmation que les clients pourraient mettre en évidence. Sont exclus tous les évolutions spécifiques développés avec ou sans cahier des charges qui pourront faire l'objet d'un développement spécifique payant. Il est rappelé que la formation est exclue de la maintenance du logiciel. AUDIT VIRTUEL s'engage à mettre en place les moyens nécessaires pour corriger ces anomalies dans des délais raisonnables.
La maintenance est incluse dans l'abonnement d’AUDIT 3D+. Pendant toute la durée de validité du contrat, AUDIT VIRTUEL mettra automatiquement à disposition de votre administrateur de licences toutes les mises à jour de maintenance et les nouvelles versions du logiciel couvert, sans frais supplémentaire sur internet. Vous bénéficierez également d'une assistance technique prioritaire par courrier électronique ou assistance téléphonique en cas d'anomalie liées au logiciel, la formation restant à la charge des clients.
La maintenance et le support technique excluent la formation, l'assistance à l'utilisation et à l'installation du logiciel ou les métiers techniques, les déplacements sur site, la réalisation des prestations proposées dans le logiciel et la récupération des données.</p>

<h2>ARTICLE 6 - AJOUT DE LICENCES A UNE LICENCE EXISTANTE D'UN LOGICIEL AUDIT VIRTUEL</h2>
<p>Pendant toute la durée de validité du contrat pour votre entreprise, vous pouvez ajouter des licences supplémentaires à votre licence multi-Utilisateurs du logiciel AUDIT 3D+. La commande des licences additionnelles doit être passée au nom de votre administrateur de licences et doit être envoyée à son adresse enregistrée. Le coût des licences supplémentaires est fondé sur le prix standard d’AUDIT VIRTUEL au moment de la souscription de la licence en question.</p>

<h2>ARTICLE 7 - ACTIVATIONS DES LICENCES ET MISES A JOUR DU LOGICIEL</h2>
<p>Les mises à jour et activations de licences sont soumises au contrôle de leur validité courante. AUDIT VIRTUEL se réserve la possibilité unilatérale de procéder à la suppression de l'activation d'un logiciel dont l'utilisation serait frauduleuse et au passage en mode de démonstration du compte incriminé. Afin d'assurer un suivi clientèle efficace, le logiciel mettra à jour vos coordonnées société dans la base client d’AUDIT VIRTUEL lors de la mise à jour du logiciel et lors d'une demande de maintenance ou d’assistance. AUDIT VIRTUEL se réserve le droit de transmettre ce fichier client aux sociétés à qui elle sous-traiterait son service de maintenance.</p>

<h2>ARTICLE 8 - LEGISLATION FRANCAISE ET EUROPEENNE</h2>
<p>Droit d'accès au fichier informatisé : tout utilisateur ayant déposé dans le service des informations directement ou indirectement nominatives peut demander la communication des informations nominatives le concernant à l'administrateur du service et les faire rectifier le cas échéant, conformément à la loi française No 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
Une annexe est disponible en fin de document suivant le traitement des données à caractères personnel conformément à l'article 28 du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques.</p>

<h2>CONDITIONS PARTICUILIERES des SERVICES WEB</h2>
<p>Les services web sont mis à disposition par la société AUDIT VIRTUEL, SAS au capital de 5 000 Euros, dont le siège social est au 43 rue Dulong - 75017 PARIS, immatriculée au registre du commerce et des sociétés de PARIS, sous le n° XXX XXX XXX. Le responsable de la publication est Monsieur AUCOUTURIER Emmanuel.
Les présentes Conditions particulières ont pour objet de définir les conditions et modalités de la mise à disposition par AUDIT VIRTUEL au Client des services web de gestion, communication visuelle, transfert et stockage de fichiers comportant différentes fonctionnalités, selon les formules proposées (ci-après le « Service »). Les présentes Conditions peuvent être complétées ou modifiées, le cas échéant, par des conditions et modalités d'utilisation spécifiques propres à certaines fonctionnalités et à certains moyens d'accès ou de paiement.
Les présentes Conditions prévalent SUR TOUTES AUTRES conditions générales ou particulières qui n'ont pas été expressément acceptées par la société AUDIT VIRTUEL
Les termes et expressions suivants ont, sauf précision contraire, le sens qui leur est donné ci-dessous s'ils apparaissent avec leur première lettre en majuscule, qu'ils soient au singulier ou au pluriel dans le présent Contrat ou dans tout autre document émanant d’AUDIT VIRTUEL :
Client : désigne la personne ayant souscrit au Service et qui est responsable du paiement du prix.
Conditions ou Contrat : désigne l'ensemble des droits et obligations des parties concernant le Service et décrit dans les présentes Conditions Particulières.<br>
Service : désigne les outils de transfert, stockage de fichiers, de gestion et de communication visuelle.<br>
Serveur : ordinateur où sont hébergées les données et où le site du service est exécuté.<br>
Site AUDIT VIRTUEL : site internet consultable à l'adresse <a href="https://auditvirtuel.com">auditvirtuel.com</a> et qui permet de commander le Service. API : « Application Programming Interface » ; ensemble de définitions et de protocoles qui facilite la création et l'intégration de logiciels d'applications.
Utilisateur : désigne la personne utilisant le Service.</p>

<h2>ARTICLE 2 - ACCEPTATION DES CONDITIONS ET GARANTIES APPORTEES PAR LE CLIENT</h2>
<p>L'accès et l'utilisation du Service sont soumis à l'acceptation et au respect des présentes Conditions par le Client.
La vente et l'utilisation du Service sont réservées aux professionnels. Par conséquent, le Client atteste être une personne majeure agissant à titre professionnel et disposer de la capacité nécessaire à la conclusion et à l'exécution du présent Contrat. S'il agit pour le compte d'une personne morale, le Client atteste être le représentant légal ou disposer d'un mandat de la personne morale concernée pour conclure le Contrat.
Même si le Client n'est pas Utilisateur du Service, il reste seul responsable et se porte fort du respect du Contrat par tout Utilisateur du Service.
Lors de toute inscription, souscription ou commande, l'Utilisateur déclare et reconnaît avoir lu et accepter l'intégralité des termes des présentes conditions générales. En outre, toute utilisation du Service vaut acceptation sans réserve par l'Utilisateur des présentes conditions générales.
La Société AUDIT VIRTUEL se réserve la possibilité de modifier à tout moment, en tout ou partie, les présentes Conditions. Toute nouvelle version des présentes Conditions sera publiée sur le Site d’AUDIT VIRTUEL.
Les Conditions applicables sont celles en vigueur lors de la souscription au Service, sauf modification légale ou réglementaire. En cas de renouvellement de l'abonnement au Service, seront alors applicables les Conditions en vigueur à cette date.
En cas de non-respect par l'Utilisateur des présentes conditions, la Société AUDIT VIRTUEL aura la faculté de cesser le service selon les modalités définies à l'article 10.</p>

<h2>ARTICLE 3 – DESCRIPTION DU SERVICE</h2>
<p>Selon la formule choisie, les Services permettent à l’Utilisateur de gérer l’activité de gestion ou d’administration de biens immobilier et de transmettre des fichiers selon des formats définis à un ou plusieurs destinataires, via un serveur web. Les fichiers transférés sont stockés sur des serveurs de la société AUDIT VIRTUEL, pour une durée limitée dans le temps. Les destinataires peuvent naviguer sur le site où sont stocké ces fichiers et éventuellement les télécharger en suivant les instructions qui leur sont automatiquement transmises par courrier électronique ou en se connectant directement sur l’adresse du site communiqué.
Les fichiers transférés sont limités par leur taille et les processus de transferts sont limités dans le temps. L’Utilisateur devra se conformer à ces limites. Pour autant, le succès du transfert et l’utilisation des Services dépend de la qualité et de la capacité de la connexion Internet de l’Utilisateur, ainsi que de ses équipements, notamment pour les volumes importants de fichiers (un ou plusieurs Megaoctets), des versions des navigateurs web, etc.
Le détail du Service et des formules proposées, est accessible sur le Site AUDIT VIRTUEL. Les services web peuvent être utilisés par plusieurs Clients avec leurs identifiants respectifs qui sont rattachés au même compte client AUDIT avec un numéro de série unique.
Un schéma explicatif, de même que les avantages du Service, ainsi que des questions/réponses sont par ailleurs présentés sur le Site AUDIT VIRTUEL.
L’Utilisateur s’engage à prendre connaissance de l’ensemble de ces éléments préalablement à toute inscription, souscription ou commande, afin d’être parfaitement informé des caractéristiques et contraintes du Service proposé (notamment en ce qui concerne la durée de stockage des fichiers, la configuration du poste utilisateur, le trafic autorisé, etc.).
Pour le cas particulier d’un Service contenant une API, la prestation peut correspondre selon la formule choisie à la conception, maintenance et/ou l’hébergement d’un site Internet permettant au CLIENT d’enrichir ses services, via le serveur du site Internet. Les fichiers du site internet sont stockés sur le Serveur de la société AUDIT VIRTUEL, pour une durée limitée dans le temps, en permettant à ses clients de visualiser son contenu en suivant les instructions qui leur sont automatiquement transmises à travers un explorateur. Les noms de domaines sont réservés pour une durée de 1 an et seront renouvelés chaque année tant que le contrat sera maintenu. En cas de défaut de paiement, les noms de domaines seront remis dans le domaine public suivant les conditions du registraire (bureau d'enregistrement). Toutes demandes de transfert de nom de domaine entraineront une facturation auprès du CLIENT. Le détail du Service et des formules proposées, est accessible sur le Site AUDIT VIRTUEL sinon définit par un cahier des charges. L'Utilisateur s'engage à prendre connaissance de l'ensemble de ces éléments préalablement à toute inscription, souscription ou commande, afin d'être parfaitement informé des caractéristiques et contraintes du Service proposé (particulièrement en ce qui concerne la création d’API sous cahier des charges, notamment le détail des services proposés).
En acceptant les présentes conditions, I’Utilisateur reconnait par ailleurs :<br>
- qu'il connait le mode de fonctionnement du réseau internet, ainsi que ses caractéristiques et limites ;<br>
- qu'il s'est assuré que le Service choisi est de nature à répondre à ses besoins ;<br>
- qu'il sait et a conscience de ce que les transmissions de données sur le réseau internet ne peuvent bénéficier d'une sécurité absolue ;<br>
- qu'il sait et a conscience de ce que la Société AUDIT VIRTUEL ne maîtrise pas et ne saurait être responsable de la possible saturation des réseaux à certaines périodes de pointe, de même que des éventuels dysfonctionnements propres à ces mêmes réseaux ;<br>
- qu'il connaît bien les codes de conduite, usages et règles de comportement admis sur le réseau internet.</p>

<h2>ARTICLE 4 - OUVERTURE D’UN COMPTE - IDENTIFICATION - PREUVE - ECHANGE D'INFORMATIONS</h2>
<h3>Compte Client :</h3>
<p>Pour souscrire au Service, le Client doit s'enregistrer en créant son compte et en renseignant ses informations personnelles. Pour la validation de sa commande, le Client doit remplir avec exactitude tous les champs obligatoires du formulaire de création de compte. Dès création du compte, l'Utilisateur se voit attribuer un identifiant ("login") et un mot de passe (ci-après "Identifiants") lui permettant d'accéder à son espace personnel.</p>
<h3>Confidentialité des identifiants :</h3>
<p>Les identifiants sont personnels et confidentiels. Ils ne peuvent être modifiés que sur demande de l’Utilisateur ou à l'initiative de la Société AUDIT VIRTUEL.
L'Utilisateur est seul et entièrement responsable de l'utilisation et de la conservation de ses identifiants. Il s'engage en conséquence à prendre toute mesure pour en assurer la parfaite sécurité et confidentialité et à ne pas les divulguer à des tiers, sous quelque forme et à quelque titre que ce soit.
En cas de perte ou de vol d'un ou plusieurs de ses identifiants, l’Utilisateur est seul responsable des conséquences dommageables qui pourraient en résulter et doit en informer AUDIT VIRTUEL dans les plus brefs délais.</p>
<h3>Convention sur la preuve :</h3>
<p>Les parties conviennent expressément que :<br>
- la présence d'un code d'identification identifie valablement l'auteur d'un document ou d'un message et établit l'authenticité du document ou du message ;<br>
- un document électronique contenant un code d'identification équivaut à un écrit signé par la personne émettrice ;<br>
- les parties peuvent se prévaloir de l'impression sur papier d'un message électronique à partir d'un logiciel de messagerie électronique pour prouver le contenu des échanges qu'elles ont au sujet de l'exécution des présentes conditions générales ;<br>
- les données enregistrées par la société AUDIT VIRTUEL lors des inscriptions, commandes ou souscriptions constituent la preuve de l'ensemble des transactions conclues avec les Utilisateurs.</p>
<h3>Échange d'informations :</h3>
<p>L'Utilisateur est seul responsable des informations qu'il communique lors de l'inscription, la souscription ou la commande (nom, prénom, dénomination, coordonnées, adresse, SIRET, ...), ainsi que des conséquences pouvant résulter d'une éventuelle erreur ou inexactitude (retard ou impossibilité d'accès au Service, ...). En cas d'erreur ou d'inexactitude, tous les frais engagés par la société AUDIT VIRTUEL, notamment pour le réenregistrement de l'inscription, de la souscription ou de la commande, seront à la charge de l’Utilisateur, à moins que la société AUDIT VIRTUEL ne préfère annuler celle-ci. L'Utilisateur accepte l'usage de la messagerie électronique pour la transmission des informations qu'il demande concernant la conclusion ou l'exécution du Contrat et, d'une manière générale, pour tous échanges dans le cadre des présentes conditions.</p>

<h2>ARTICLE 5 - CONDITIONS FINANCIERES</h2>
<h3>Prix des services :</h3>
<p>Les prix sont forfaitaires et dépendent de la formule choisie. Les tarifs en vigueur peuvent être consultés sur le Site AUDIT VIRTUEL. Ils s'entendent hors taxes et sont payables en euros. L'Utilisateur situé hors de la France métropolitaine est invité à se renseigner sur les droits d'importation ou taxes qui peuvent être applicables et assume seul la responsabilité de leur déclaration et de leur paiement.
Les tarifs peuvent être modifiés, notamment en fonction de l'évolution du réseau, de la technique et des contraintes légales, étant précisé que le tarif applicable est celui en vigueur au jour de la réception de la commande ou du renouvellement.
Modalités de paiement et de facturation :
Le prix du Service est facturé pour partie à la commande (forfait de mise en place) puis mensuellement. Il est payable selon l'un des modes suivants :</p>
<h3>Pour les frais de mises en place :</h3>
<p>
- règlement par carte bancaire ou l'envoi d'un chèque bancaire émis par une banque domiciliée en France métropolitaine ou à Monaco à l'adresse suivante : AUDIT VIRTUEL, 43 rue Dulong, 75017 PARIS ;<br>
- règlement par virement bancaire émis par une banque domiciliée en France métropolitaine sur le compte de la société AUDIT VIRTUEL. Une confirmation du virement devra nous parvenir sur l'adresse électronique service.client@auditvirtuel.com ;<br>
- règlement par prélèvement SEPA. Les informations bancaires seront fournies par le Client.<br>
La commande n'est validée et n'est considérée comme ferme qu'à compter de la réception par AUDIT VIRTUEL d'un moyen de paiement valide et du complet paiement du prix. Ainsi, en cas de paiement par chèque, la commande n'est traitée qu'à la réception du chèque et n'est validée qu'après complet règlement et acceptation du paiement par la banque de l’Utilisateur.
</p>
<h3>Pour les frais mensuels :</h3>
<p>- règlement par prélèvement sur carte bancaire. Les informations bancaires seront fournies par le Client. Si la carte bancaire vient à périmer, le Client s'engage à fournir de nouvelles informations bancaires. Dans le cas contraire la société AUDIT VIRTUEL s'octroie le droit de suspension et suppression du ou des comptes clients affiliés.
- règlement par prélèvement SEPA. Pour la validation de cette méthode de paiement, le Client doit remplir avec exactitude tous les champs obligatoires du formulaire d'autorisation de prélèvement fourni par la société AUDIT VIRTUEL.
Le Service sera facturé même s'il n'est pas utilisé par le Client.</p>
<h3>Impayé, rejet, retard de paiement :</h3>
<p>Tout impayé, rejet, retard de paiement même partiel non justifié d'une seule facture ou échéance entraîne de plein droit :
- l'application de pénalités de retard calculées depuis le lendemain de la date d'échéance de la facture jusqu'à son complet règlement et égales au taux appliqué par la banque centrale européenne (BCE) à son opération de refinancement en vigueur au moment de l'application de la présente clause majoré de 10 points de pourcentage.
- l'application d'une indemnité forfaitaire pour frais de recouvrement d'un montant de quarante (40) euros et ce, sans préjudice de tout autre droit ou recours dont dispose AUDIT VIRTUEL. Dans le cas où les frais de recouvrement exposés seraient supérieurs au montant de cette indemnité forfaitaire, AUDIT VIRTUEL pourra
demander une indemnisation complémentaire, sur justification (article L441-6 du Code de commerce). AUDIT VIRTUEL pourra également résilier le Contrat dans les conditions visées à l'article 10.</p>

<h2>ARTICLE 6 - DONNEES A CARACTERE PERSONNEL</h2>
<p>AUDIT VIRTUEL demande à tout Client de communiquer un certain nombre d'informations personnelles (nom, prénom, adresse électronique, numéro de téléphone, ...). Ces informations sont destinées à la prise en compte de la commande du Client, à l'exécution du Contrat par AUDIT VIRTUEL ou ses partenaires ou sous-traitants, et de toutes suites qui pourraient en résulter.
Ce traitement de données personnelles est réalisé sous la responsabilité de la Société AUDIT VIRTUEL, qui a déclaré le traitement des données collectées sur le Site AUDIT VIRTUEL auprès de la CNIL. Le traitement des données est enregistré sous le n• XXXXXX. Une annexe est disponible en fin de document, suivant le traitement des données à caractères personnel conformément à l'article 28 du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques.
Le Client s'engage à ne pas transmettre à AUDIT VIRTUEL des données à caractère personnel faisant apparaître, directement ou indirectement, les origines ethniques, les opinions politiques, philosophiques ou religieuses ou l'appartenance syndicale des personnes, ni des données relatives à la santé ou à la vie sexuelle de celles-ci.
Les données concernant le Client sont conservées sous une forme permettant l'identification des personnes concernées pendant une durée qui n'excède pas la durée nécessaire aux finalités pour lesquelles elles sont collectées et traitées. Les données à caractère personnel ne sont accessibles qu'aux personnels habilités.
Le Client est informé de ce que les données à caractère personnel signalées comme étant obligatoires sur les formulaires et recueillies dans le cadre du Service sont nécessaires à l'utilisation de ce Service, utilisées uniquement dans le cadre de ce Service et destinées exclusivement à la Société AUDIT VIRTUEL et à ses partenaires et sous-traitants en charge de l'exécution du Contrat. En conséquence, AUDIT VIRTUEL pourra transmettre l'ensemble des données personnelles concernant le Client à toute personne devant être légitimement destinataire des informations ou tout partenaire ou sous- traitant d’AUDIT VIRTUEL qui aurait besoin de ses informations pour effectuer les opérations dont il a été chargé par AUDIT VIRTUEL (notamment maintenance, assistance, hébergement, etc.). Aussi, tout ou partie de vos données personnelles pourraient être transmises vers des pays situés en dehors de l'Union Européenne.
Dans les formulaires de collecte de données à caractère personnel, le Client est notamment informé : de l'identité du responsable de traitement, de ses droits sur les données à caractère personnel, des destinataires, de la finalité du traitement et du caractère obligatoire ou facultatif de ses réponses.
Les prospections commerciales par voie électronique qu’AUDIT VIRTUEL serait susceptible d'envoyer au Client répondent aux principes suivants :
- le Client a exprimé son consentement et a été informé, lorsqu'il a communiqué ses données à caractère personnel, de la possibilité de s'opposer gratuitement à toute utilisation commerciale de ses coordonnées,
- l'objet de la sollicitation est en rapport avec les fonctions exercées à titre professionnel par le destinataire du
message.
Le Client bénéficie d'un droit d'opposition, d'accès et de rectification des données qui le concerne et qu'il peut exercer en adressant un message à l'adresse électronique suivante
service.client@auditvirtuel.com.
Dans le cadre de l'utilisation du Service, le Client peut être amené à transmettre à AUDIT VIRTUEL des données personnelles relatives à des tiers. Dans ce cas, le Client s'engage à obtenir le consentement préalable et exprès de ces personnes, concernant la transmission et le traitement par AUDIT VIRTUEL desdites données. Le Client s'engage également à notifier à ces personnes les éléments repris ci-avant, en particulier les droits dont ils disposent ainsi que les modalités d'exercice de ces droits.
A cet égard, il est précisé que les tiers peuvent exercer leur droit d'opposition, d'accès et de rectification des données qui les concernent en adressant un message à cette fin à l'adresse
électronique suivante : service.client@auditvirtuel.com.</p>

<h2>ARTICLE 7 - RESPONSABILITE - GARANTIE</h2>
<p>AUDIT VIRTUEL n'est tenu à l'égard du Client qu'à une obligation de moyens et ne fournit aucune garantie, expresse ou implicite, y compris, toute garantie de qualité et d'adéquation à un usage particulier du Service fourni au Client et toute garantie par rapport aux informations et données fournies par les Utilisateurs et pouvant être obtenues via le Service, notamment quant à leur exactitude et leur fiabilité.</p>
<h3>Fonctionnement du réseau :</h3>
<p>Du fait des caractéristiques et limites du réseau internet que le Client déclare parfaitement connaître, ce dernier reconnaît qu'il est impossible de garantir que les données transmises via Internet seront entièrement sécurisées. La Société AUDIT VIRTUEL prendra cependant toute précaution raisonnable afin de protéger ces données contre toute perte, mauvaise utilisation, transmission ou accès non autorisés. Dès lors, AUDIT VIRTUEL ne pourra être tenue responsable de l'accès ou de l'interception de vos données par un tiers, sauf en cas de faute de sa part.<br>
Compte tenu des spécificités du réseau Internet, la Société AUDIT VIRTUEL ne peut par ailleurs offrir aucune garantie de continuité du Service, n'étant tenue à cet égard que d'une obligation de moyens. La responsabilité de la Société AUDIT VIRTUEL ne peut donc être engagée en cas de dommages liés à l'impossibilité temporaire d'accéder au Service, du fait notamment d'un dysfonctionnement ou d'une saturation des réseaux ou du fait d'opérations de maintenance techniques ou d'actualisation des informations publiées.<br>
D'une manière générale, la Société AUDIT VIRTUEL ne saurait voir sa responsabilité engagée dans les cas suivants :<br>
- contamination par virus des données de !'UTILISATEUR, dont la protection incombe à ce dernier ;<br>
- intrusions malveillantes de tiers malgré les mesures raisonnables de sécurité mises en place sur le serveur du Site AUDIT VIRTUEL ;<br>
- détournements éventuels des identifiants du Client.</p>
<h3>Modification du Service :</h3>
<p>Toutes les informations contenues sur les interfaces du Service sont susceptibles d'être modifiées à tout moment, compte tenu de l'interactivité du Service, sans que cela puisse engager la responsabilité de la Société AUDIT VIRTUEL. Responsabilité :<br>
En complément de ce qui précède, il est précisé que la Société AUDIT VIRTUEL décline toute responsabilité dans les cas suivants :<br>
- détérioration du Service provenant directement ou indirectement d'accidents de toutes sortes : choc, surtension, foudre, inondation, incendie( ... ) ;<br>
- acte de malveillance (piratage ... ) par un tiers identifié ou non ;<br>
- d'une façon générale, détérioration ou dysfonctionnement provenant d'un cas de force majeure.<br>
La Société AUDIT VIRTUEL assurant une simple prestation de gestion, de transfert et de stockage de données dont elle ignore le contenu, le Client est seul responsable de celles-ci. En conséquence, la responsabilité de la Société AUDIT VIRTUEL ne pourra être retenue au titre des données gérées, transférées et stockées, le Client s'engageant à garantir et relever indemne la société AUDIT VIRTUEL contre toutes réclamations qui pourraient être formulées à son encontre relativement au contenu ou aux caractéristiques des dites données.<br>
Le Client est seul responsable du choix d'utiliser le Service dans le cadre de son activité professionnelle. L'utilisation du Service et la sauvegarde ou non des fichiers et données qu'il transmet à l'aide du Service se font donc sous la seule responsabilité du Client et à ses risques et périls.<br>
AUDIT VIRTUEL est responsable des dommages corporels et matériels causés au Client qui résulteraient d'une faute de sa part mais ne peut en aucun cas être tenue responsable, quel que soit le type d'action en responsabilité engagée, même si AUDIT VIRTUEL a été informée de leur possible survenance, sauf règle légale ou impérative contraire, des dommages immatériels et/ou parfois qualifiés d'indirects, accessoires, spéciaux y compris les dommages résultant d'une perte de profits, de manque à gagner, de perte de données ou de privation d'usage subis par le Client ou par un tiers.<br>
En tout état de cause, à l'exception des dommages corporels causés aux personnes, la responsabilité pécuniaire d’AUDIT VIRTUEL sera limitée au montant du prix hors taxes payé par le Client en contrepartie du Service fourni pour l'année au cours de laquelle le dommage se produit.<br>
Cette clause sera appliquée sous réserve des dispositions contraires prévues par certaines législations. Dans ce cas, la responsabilité sera limitée dans la mesure permise par la loi applicable.<br>
Le Client est invité à souscrire à ses frais une assurance appropriée à sa situation particulière s'il souhaite être indemnisé pour tout dommage ou perte que lui et/ou ses clients pourraient subir au-delà du montant visé ci-dessus.</p>

<h2>ARTICLE 8 - OBLIGATIONS DU CLIENT</h2>
<p>Le Client s'oblige, lors de toute inscription ou commande, à transmettre tous les renseignements, notamment administratifs, nécessaires à son identification, en vue de l'ouverture d'un compte. Le Client s'engage à informer la société AUDIT VIRTUEL de toute modification concernant ces données et sera seul responsable des éventuels dysfonctionnements qui pourraient résulter d'un défaut de mise à jour de ces données.<br>
Le Client s'engage à ne pas enfreindre la réglementation française ou internationale en vigueur dans le cadre de l'utilisation du Service.<br>
A ce titre, le Client s'engage notamment à ne pas utiliser le Service afin de communiquer des fichiers, données ou informations :<br>
- revêtant un caractère illicite ou procédant d'activités à caractère illicite. A ce titre, le Client s'interdit plus particulièrement l'utilisation et/ou la communication de fichiers, données ou informations favorisant l'apologie des crimes contre l'humanité, l'incitation à la haine raciale, la pornographie enfantine, l'incitation à la violence, ainsi que les atteintes à la dignité humaine ;<br>
- ne respectant pas les droits de tiers tels que, notamment, le droit à la vie privée, le droit à la propriété industrielle ou intellectuelle ;<br>
- contraires aux bonnes mœurs ;<br>
- qui ne respecteraient pas les dispositions de l'article 28 du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques ni de la loi Informatique et Libertés du 6 janvier 1978 et/ou les prescriptions de la CNIL.</p>

<h2>ARTICLE 9 - DUREE ET RESILIATION Durée du Contrat :</h2>
<p>Le Contrat entre en vigueur à compter de la validation de la commande par AUDIT VIRTUEL. Il est conclu pour une durée d'un (1) an et se renouvelle tacitement chaque année, à la date anniversaire, pour une durée identique. Tout paiement d'avance vaut engagement ferme.
<h3>Résiliation sans faute :</h3>
<p>Le Client peut résilier le Contrat à tout moment en adressant sa demande de résiliation par voie postale à AUDIT VIRTUEL, à l'adresse figurant en-tête des présentes.<br>
La résiliation sera prise en compte dès réception de votre demande.<br>
AUDIT VIRTUEL pourra également mettre fin au Contrat dans l'hypothèse où elle déciderait d'arrêter le Service pour tout motif légitime tenant notamment à des considérations économiques ou à l'état du marché. Le cas échéant, le Client en sera informé au moins deux (2) mois avant l'arrêt effectif du Service.</p>
<h3>Résiliation pour faute :</h3>
<p>Tout non-respect par l'une des parties de ses obligations peut justifier la résiliation du Contrat par l'autre partie.<br>
Dans ce cas, la partie qui souhaite résilier le Contrat devra mettre l'autre partie en demeure de respecter ses engagements.<br>
Si, à l'expiration d'un délai de quinze (15) jours à compter de la date d'émission de la mise en demeure, l'autre partie ne s'est pas conformée à ses obligations, alors le Contrat sera résilié de plein droit par l'envoi d'une seconde lettre.<br>
Par dérogation à l'alinéa précédent, dans le cas où la nature des engagements non respectés rendrait impossible pour la partie défaillante de remédier à ses obligations, le Contrat se trouvera résilié de plein droit immédiatement après la constatation du manquement sans autre formalité que l'envoi à la partie défaillante d'un courrier électronique mentionnant la présente clause.<br>
Conséquences de la cessation du Contrat :</p>
<h3>- Paiement</h3>
<p>Tout mois commencé au jour de la date d'effet de la résiliation est dû dans son intégralité. En outre, si le Client est lié par une période d'engagement, notamment dans l'hypothèse où il a versé des sommes d'avance, alors le paiement des sommes restant dues jusqu'au terme de cette période devra être acquitté dans son intégralité.</p>
<h3>- Données du Client</h3>
<p>Le Client reconnaît par ailleurs qu'en cas de cessation du contrat, ses données informatiques seront immédiatement et irrémédiablement supprimées du Serveur. Par conséquent, il appartient au Client de veiller à sauvegarder les données qu'il stocke via le Service avant la cessation effective du Contrat. AUDIT VIRTUEL ne pourra être tenue responsable de conséquences liées à la suppression des données du Client, notamment en cas de perte de données.</p>

<h2>ARTICLE 10 - PROPRIETE INTELLECTUELLE</h2>
<p>AUDIT VIRTUEL est titulaire des droits de propriété intellectuelle portant sur les éléments mis à disposition du Client dans le cadre du présent Contrat, notamment le Site AUDIT VIRTUEL et le Service. Ces éléments sont mis à disposition du Client uniquement pour la durée du Contrat et pour les besoins d'exécution de l'objet du Contrat. La présentation et le contenu de ces éléments constituent, ensemble, une œuvre protégée par les lois en vigueur sur la propriété intellectuelle. Par conséquent, toute reproduction, intégrale ou partielle de ces éléments, est systématiquement soumise à l'autorisation préalable et écrite d’AUDIT VIRTUEL, sauf à être sanctionné, notamment au titre de la contrefaçon.<br>
La mise à disposition du Service n'emporte nullement cession des droits de la société AUDIT VIRTUEL sur ledit Service ou sur un quelconque de ses éléments, ni sur la documentation associée.<br>
Le Client s'engage à ne pas porter atteinte, directement ou indirectement, ou par l'intermédiaire de tiers, aux droits de la société AUDIT VIRTUEL sur les logiciels et Services qu'elle propose.<br>
Notamment, le Client s'interdit toute adaptation, modification, transformation, décompilation, analyse fonctionnelle ou arrangement du Service, pour quelque raison que ce soit, sauf dans la limite de ce que permet le Code de la propriété intellectuelle.</p>

<h2>ARTICLE 11 - NON-CONCURRENCE</h2>
<p>Le Client s'interdit de développer ou d'exploiter pour son compte ou pour le compte de tiers un outil concurrent du Service qui lui est fourni par AUDIT VIRTUEL.<br>
Cette obligation de non-concurrence s'applique pour la durée du Contrat et pour une durée d'un (1) an à l'issue du Contrat quelle qu'en soit la raison. Elle est limitée à l'interdiction pour le Client de développer ou exploiter un outil concurrent du Service, directement ou indirectement, pour son compte ou pour le compte de tiers intervenant sur le territoire français.</p>

<h2>ARTICLE 12- REFERENCES</h2>
<p>Pendant la durée du Contrat, le Client autorise expressément la société AUDIT VIRTUEL à faire apparaître sa dénomination et/ou son enseigne accompagnée de son logo sur les pages du Site AUDIT VIRTUEL, ainsi que sur ses documents commerciaux afin de le faire figurer au rang des partenaires ayant fait confiance au service AUDIT VIRTUEL.</p>

<h2>ARTICLE 13 - RETRACTATION</h2>
<p>Dans la mesure où le Contrat est conclu par le Client pour les besoins de son activité professionnelle, les dispositions du Code de la consommation ne sont pas applicables et le Client ne peut donc en aucun cas bénéficier d'un droit de rétractation.</p>

<h2>ARTICLE 14 - ARCHIVAGE DU CONTRAT</h2>
<p>Les données relatives au contrat conclu entre le Client et la société AUDIT VIRTUEL sont conservées au siège de cette dernière.<br>
Elles sont accessibles sur demande du Client par courrier électronique envoyé à l’adresse suivante service.client@auditvirtuel.com.</p>

<h2>ARTICLE 15 - SERVICE CLIENTELE</h2>
<p>Toutes demandes d'informations et/ou réclamations peuvent être présentées à la société AUDIT VIRTUEL : par courrier postal adressé au 43 rue Dulong, 75017 PARIS ;<br>
par courrier électronique adressé à l'adresse suivante : service.client@auditvirtuel.com<br>
par téléphone au 01 82 83 82 00 (du lundi au vendredi de 9H30 à 12H et de14H30 à 17H).</p>

<h2>ARTICLE 16 - DROIT APPLICABLE - LANGUE DU CONTRAT</h2>
<p>Les relations qui se nouent entre la Société AUDIT VIRTUEL et ses clients sont soumises au droit français, à l'exclusion de toute autre législation.<br>
En cas de rédaction des présentes Conditions en plusieurs langues ou de traduction, seule la version française fait foi entre les parties.</p>

<h2>ARTICLE 17 - DIVERS</h2>
<p>Le fait que l'une quelconque des présentes conditions ne soit pas invoquée à un moment donné ne peut être interprété comme valant renonciation à faire appliquer celles-ci. Au cas où l'une quelconque des présentes conditions serait déclarée nulle ou contraire à une disposition d'ordre public, elle sera réputée non-écrite et les autres stipulations resteront en vigueur.</p>

<h2>ARTICLE 18 - LITIGES - CONTESTATION</h2>
<p>Toutes contestations ou difficultés ainsi, plus généralement, que tout litige avec le Client se rapportant à la conclusion, l'interprétation, l'exécution ou la cessation des présentes seront de la compétence exclusive du Tribunal de commerce de PARIS (75).</p>

<h2>ANNEXE TRAITEMENT DE DONNÉES A CARACTÈRE PERSONNEL OU « DPA »</h2>
<p>La présente annexe (ci-après dénommée « DPA » en référencement à l'acronyme de l'appellation anglaise « Data Processing Agreement ») fait partie intégrante du contrat (le « Contrat ») conclu entre AUDIT VIRTUEL S.A.S. (« AUDIT ») et le Client, et ayant pour objet de définir les conditions applicables aux Services fournis par AUDIT (les « Services »). Le DPA et le Contrat sont complémentaires et s'expliquent mutuellement. Toutefois, en cas de contradiction, le DPA prévaut.<br>
Les expressions qui commencent par une lettre majuscule et qui ne sont pas définies dans le présent DPA ont le sens qui leur est donné dans le Contrat. La finalité du présent DPA conclu entre AUDIT et le Client conformément à l'article 28 du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données ("Règlement général sur la protection des données" ou "RGPD"), est de définir les conditions dans lesquelles AUDIT, en qualité de Sous-traitant et dans le cadre des Services définis dans le Contrat, traite, sur instruction du Client, des données à caractère personnel telles que définies dans le RGPD ("Données à caractère personnel"). Le traitement des données à caractère personnel par AUDIT en tant que responsable du traitement n'entre pas dans le champ d'application du présent DPA. Aux fins du présent DPA, AUDIT agit en tant que "Sous-traitant" et le Client est présumé agir en tant que" Responsable du traitement ". Les termes" Sous-traitant " et" Responsable du traitement" ont le sens qui leur est donné au sein du RGPD. Si le Client agit en tant que sous-traitant pour le compte d'un tiers responsable du traitement, les Parties conviennent expressément que les conditions suivantes s'appliquent :<br>
(a) Le Client doit s'assurer que (i) toutes les autorisations nécessaires pour conclure le présent DPA ont été obtenues du Responsable du traitement (ii), un contrat, qui est en parfaite adéquation avec les termes et conditions du Contrat (y compris le présent DPA), a été conclu avec le Responsable du traitement conformément à l'article 28 du RGPD, (iii) toutes les instructions reçues par AUDIT de la part du Client en exécution du Contrat et du présent DPA sont parfaitement conformes aux instructions du Responsable du traitement et (iv) toutes les informations communiquées ou mises à disposition par AUDIT en vertu du présent DPA sont, lorsque cela est requis, communiquées de manière appropriée au Responsable du traitement.<br>
(b) AUDIT (i) traite les Données à caractère personnel uniquement sur instruction du Client et (ii) ne reçoit aucune instruction directement du Responsable du traitement, sauf dans les cas où, le Client a matériellement disparu ou a cessé d'avoir une existence juridique sans que les droits et obligations du Client n'aient été transférés à une entité tierce.<br>
(c) Le Client, qui est entièrement responsable envers AUDIT de la bonne exécution des obligations du Responsable du traitement conformément au présent DPA, indemnise et dégage AUDIT de toute responsabilité pour (i) tout manquement du Responsable de traitement de se conformer à la loi applicable, et (ii) toute action, réclamation ou plainte du Responsable de traitement concernant les dispositions du Contrat (y compris le présent DPA) ou concernant les instructions reçues par AUDIT de la part du Client.</p>
<h3>1. CHAMP D'APPLICATION</h3>
<p>AUDIT est autorisé, en tant que Sous-traitant agissant selon les instructions du Client, à traiter les Données à caractère personnel du Responsable du traitement dans la mesure nécessaire à la fourniture des Services. La nature des opérations menées par AUDIT concernant les Données à caractère personnel peut être le calcul de données, le stockage et/ou tout autre Service tel que décrit dans le Contrat. Le type de Données à caractère personnel et les catégories de personnes concernées sont déterminés et contrôlés par le Client, à sa seule discrétion. Les activités de traitement sont effectuées par AUDIT pour la durée prévue au Contrat.</p>
<h3>2. OFFRE DE SERVICES</h3>
<p>Le Client est seul responsable du choix des Services. Le Client doit s'assurer que les Services choisis ont les caractéristiques et les conditions requises compte tenu des activités et traitements du Responsable du traitement, ainsi que du type de Données à caractère personnel à traiter dans le cadre des Services, notamment, mais non-limitativement, lorsque les Services sont utilisés pour traiter des Données à caractère personnel soumises à des règlementations ou des normes spécifiques.</p>
<h3>3. CONFORMITÉ À LA RÈGLEMENTATION APPLICABLE</h3>
<p>Chaque partie respecte la règlementation applicable en matière de protection des données, y compris le Règlement Général sur la Protection des Données, à compter de sa date d'application dans l'Union européenne.</p>
<h3>4. OBLIGATIONS D’AUDIT</h3>
<p>AUDIT s'engage à :<br>
(a) traiter les Données à caractère personnel téléchargées, stockées et utilisées par le Client dans le cadre des Services uniquement dans la mesure nécessaire à la fourniture des Services tels que définis dans le Contrat ;<br>
(b) ne pas accéder à ou utiliser des Données à caractère personnel à d'autres fins que celles nécessaires à l'exécution des Services (en particulier dans le cadre de la gestion des incidents) ;<br>
(c) mettre en place les mesures techniques et organisationnelles décrites dans le Contrat, afin d'assurer la sécurité des Données à caractère personnel dans le cadre du Service ;<br>
(d) s'assurer que les employés d’AUDIT autorisés à traiter les Données à caractère personnel dans le cadre du Contrat sont soumis à une obligation de confidentialité et reçoivent une formation appropriée concernant la protection des Données à caractère personnel ;<br>
(e) informer le Client si, à son avis et compte tenu des informations dont il dispose, une des instructions du Client enfreint les dispositions du RGPD ou d'autres dispositions de l'Union européenne ou d'un État membre de l'Union européenne en matière de protection des données personnelles ;<br>
(f) dans le cas de demandes reçues d'une autorité compétente et relatives aux Données à caractère personnel traitées en vertu du Contrat, à informer le Client (à moins que les lois applicables ou l'injonction d'une autorité compétente ne l'interdisent), et à limiter la communication des données à ce que l'autorité a expressément demandé. Sur demande écrite du Client, AUDIT fournit au Client une assistance raisonnable dans la réalisation d'analyses d'impact relatives à la protection des données et la consultation de l'autorité de contrôle compétente, dans la mesure où le Client est tenu de le faire en vertu de la loi applicable en matière de protection des données, et si une telle assistance est nécessaire et se rapporte aux traitements de Données à caractère personnel opérés par AUDIT en vertu du Contrat. Cette assistance consiste à assurer la transparence des mesures de sécurité mises en œuvre par AUDIT pour ses Services. AUDIT s'engage à mettre en place les mesures de sécurité techniques et organisationnelles suivantes : (a) des mesures de sécurité physique destinées à empêcher les personnes non autorisées d'accéder à l'infrastructure dans laquelle les données du client sont stockées ; (b) des contrôles d'identité et d'accès au moyen d'un système d'authentification et d'une politique en matière de mots de passe ;<br>
(g) un système de gestion des accès qui limite l'accès aux locaux, aux personnes ayant besoin d'y accéder dans l'exercice de leurs fonctions et dans le cadre de leurs responsabilités ; (d) du personnel de sécurité chargé de surveiller la sécurité physique des locaux de AUDIT ; (e) un système qui isole physiquement et/ou de façon logique les clients les uns des autres ; (f) des processus d'authentification des utilisateurs et des administrateurs, ainsi que des mesures visant à protéger l'accès aux fonctions d'administration ;<br>
(h) des processus et des mesures de suivi des actions effectuées sur son système d'information.</p>
<h3>5. ATTEINTES À LA PROTECTION DES DONNÉES À CARACTÈRE PERSONNEL</h3>
<p>Si AUDIT a connaissance d'un incident affectant les Données à caractère personnel du Responsable du traitement (accès non autorisé, perte, divulgation ou altération de données), AUDIT en informe le Client dans les meilleurs délais. La notification doit (i) décrire la nature de l'incident, (ii) décrire les conséquences probables de l'incident, (iii) décrire les mesures prises ou proposées par AUDIT en réponse à l'incident et (iv) préciser qui est l'interlocuteur chez AUDIT.</p>
<h3>6. LOCALISATION ET TRANSFERT DES DONNÉES À CARACTÈRE PERSONNEL</h3>
<p>Lorsque les Services permettent au Client de stocker des Contenus et notamment des Données à caractère personnel, la ou les localisation(s), ou zone(s) géographique(s) du ou des Datacenter(s) disponible(s) sont précisés sur simple demande. Les données stockées par le Client dans le cadre des Services sont par défaut sur le Datacenter d'OVH de Roubaix (Dont l'adresse de contact est la suivante : 2 rue Kellermann - 59100 Roubaix - France, SAS au capital de 10 174 560 € RCS Lille Métropole 424 761 419 00045 Code APE 26202).</p>
<h3>7. SOUS-TRAITANCE</h3>
<p>Sous réserve des dispositions de la clause "Localisation et transfert des Données à caractère personnel" ci-dessus, AUDIT peut engager un autre sous-traitant pour traiter les Données personnelles dans le cadre de l'exécution des Services ("Sous-traitant ultérieur"). Le Client autorise expressément AUDIT à engager ses Sociétés Apparentées en tant que Sous- traitants ultérieurs. AUDIT reste vis-à-vis du Client entièrement responsable de l'exécution de toute obligation que le Sous-traitant ultérieur ne remplit pas. Nonobstant ce qui précède, AUDIT est expressément autorisé à engager des fournisseurs tiers (tels que des fournisseurs d'énergie, des fournisseurs de réseaux, des gestionnaires de points d'interconnexion de réseaux ou des Datacenter Co-localisés, des fournisseurs de matériel et de logiciels, des transporteurs, des fournisseurs techniques, des sociétés de sécurité), sans devoir informer le Client ou obtenir son autorisation préalable, à condition que ces fournisseurs tiers n'aient pas accès aux Données à caractère personnel.</p>
<h3>8. OBLIGATIONS DU CLIENT ET DU RESPONSABLE DU TRAITEMENT</h3>
<p>Pour le traitement des Données à caractère personnel conformément au Contrat, le client doit fournir à AUDIT par écrit (a) toute instruction pertinente et (b) toute information nécessaire à la création du registre des activités de traitement du sous-traitant. Le Client reste seul responsable du traitement des informations et instructions communiquées à AUDIT. Le Responsable du traitement a la responsabilité de s'assurer que : a) le traitement des Données personnelles du Responsable du traitement dans le cadre de l'exécution du service a une base juridique appropriée (par exemple, le consentement de la personne concernée, les intérêts légitimes du Responsable de traitement, etc.) ; b) toutes les procédures et formalités requises (telles que analyse d'impact relative à la protection des données, notification et demande d'autorisation à l'autorité de contrôle compétente en matière de traitement de données personnelles ou à tout autre organisme compétent, le cas échéant) ont été effectuées ; c) la personne concernée est informée du traitement de ses Données à caractère personnel de façon concise, transparente, intelligible et facilement accessible, en utilisant un langage clair et simple, comme le prévoit le RGPD ; d) les personnes concernées sont informées et ont à tout moment la possibilité d'exercer facilement les droits relatifs aux données prévus par le RGPD directement auprès du Client ou du Responsable du traitement.</p>
<h3>9. DROIT DES PERSONNES CONCERNÉES</h3>
<p>Le Responsable du traitement est pleinement responsable de l'information des personnes concernées concernant leurs droits et du respect de ces droits, y compris les droits d'accès, de rectification, d'effacement, de limitation ou de portabilité. AUDIT fournit la coopération et l'assistance, dans la mesure où cela est raisonnablement nécessaire pour répondre aux demandes des personnes concernées. Cette coopération et cette assistance raisonnable peuvent consister à (a) communiquer au Client toute demande reçue directement de la personne concernée et (b) permettre au Responsable du traitement de concevoir et de déployer les mesures techniques et organisationnelles nécessaires pour répondre aux demandes des personnes concernées. Le Responsable du traitement est seul responsable des réponses à ces demandes. Le Client reconnaît et convient que, dans l'éventualité où une telle coopération et assistance nécessiterait des ressources importantes de la part d'AUDIT, cela pourra être facturé au Client à condition de le lui notifier et d'obtenir son accord au préalable.</p>
<h3>10. SUPPRESSION ET RESTITUTION DES DONNÉES À CARACTÈRE PERSONNEL</h3>
<p>A la fin du Service (notamment en cas de résiliation ou de non renouvellement), AUDIT s'engage à supprimer dans les conditions prévues au Contrat tout Contenu (notamment les informations, données, fichiers, systèmes, applications, sites internet et autres éléments) reproduit, stocké, hébergé ou autrement utilisé par le Client dans le cadre des Services, sauf si une demande émise par une autorité légale ou judiciaire compétente, ou la loi applicable de l'Union européenne ou d'un État membre de l'Union européenne en exigent autrement. Le Client est seul responsable de faire en sorte que les opérations nécessaires (telles que la sauvegarde, le transfert vers une solution tierce. etc.) à la conservation des Données à caractère personnel soient effectuées, notamment avant la résiliation ou l'expiration des Services, et avant de procéder à toute opération de suppression, de mise à jour ou de réinstallation des Services. A cet égard, le Client est informé que la résiliation et l'expiration d'un Service pour quelque raison que ce soit (incluant, mais de façon non exclusive le non- renouvellement), ainsi que certaines opérations de mise à jour ou de réinstallation des Services, peuvent automatiquement entraîner la suppression irréversible de tout Contenu (y compris les informations, données, fichiers, sites internet et autres éléments) reproduit, stocké, hébergé ou autrement utilisé par le Client dans le cadre des Services, ce compris toute sauvegarde potentielle.</p>
<h3>11. RESPONSABILITÉ</h3>
<p>AUDIT ne peut être tenu responsable que des dommages causés par un traitement pour lequel (i) il n'a pas respecté les obligations prévues par le RGPD qui incombent spécifiquement aux sous-traitants ou pour lequel (ii) il a agi en-dehors des instructions licites du Client ou contrairement à celles-ci. Dans de tels cas, la disposition du Contrat relative à la Responsabilité s'applique. Lorsqu' AUDIT et le Client sont impliqués dans un traitement dans le cadre du présent Contrat qui a causé un dommage à une personne concernée, le Client prend en charge, dans un premier temps, l'intégralité de la réparation effective (ou toute autre compensation) due à la personne concernée et, dans un second temps, réclame à AUDIT la part de la réparation correspondant à la part de responsabilité d' AUDIT dans le dommage, étant précisé que les clauses limitatives de responsabilité prévues par le Contrat demeurent applicables.</p>
<h3>12. AUDITS</h3>
<p>AUDIT met à la disposition du Client toutes les informations nécessaires pour (a) démontrer la conformité aux exigences du RGPD et (b) mener des audits. Des informations supplémentaires peuvent être communiquées au Client sur demande faite au Support AUDIT. Si les informations, s'avèrent insuffisantes pour permettre au Client de démontrer que les obligations prévues par le RGPD sont remplies, AUDIT et le Client se réunissent alors pour convenir des conditions opérationnelles, sécuritaires et financières d'une inspection technique sur site. En toutes hypothèses, les conditions de cette inspection ne doivent pas affecter la sécurité des autres clients d'AUDIT.<br>
L'inspection sur site susmentionnée, ainsi que la communication des certificats et des rapports de contrôles peuvent donner lieu à une facturation supplémentaire raisonnable. Toute information communiquée au Client en vertu de la présente clause et qui n'est pas disponible sur le Site Internet d'AUDIT est considérée comme une information confidentielle d’AUDIT en vertu du Contrat. Avant de communiquer ces informations. AUDIT peut exiger la signature d'un accord de confidentialité spécifique. Nonobstant ce qui précède, le Client est autorisé à répondre aux demandes de l'autorité de contrôle compétente à condition que toute divulgation d'informations soit strictement limitée à ce qui est demandé par ladite autorité. Dans un tel cas, et à moins que la loi applicable ne l'interdise, le Client doit d'abord consulter AUDIT au sujet de toute divulgation requise.</p>
      </div>`;
