'use client'

import Footer from '@/components/shared/Footer'
import HomeTitle from '@/components/shared/HomeTitle'
import TopMenu from '@/components/shared/TopMenu'
import { SmoothScrollProvider } from '@/context/SmoothScrollContext'
import { oxygen } from '@/fonts/oxygen'
import React, { FC, useEffect, useRef, useState } from 'react'

const MentionsLegalesScreen: FC = () => {
  const [start, setStart] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<string>("")
  const [secondInView, setSecondInView] = useState<boolean>(false)
  const [footerView, setFooterView] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(()=> {
    setStart(true)
  }, [])

  if(!start) return null

  const liStyle = `mb-2.5 text-lg font-bold`
  const pStyle = `mb-8`

  const nomDuSite = "www.betry-psychomotricienne.fr"
  const nom ="Estelle Bétry"
  const propriAdresse = "Estelle Bétry résidant à Arles (13200)"
  const creator="Votha Chheng"
  const email="betry.estelle@gmail.com"
  
  return (
    <SmoothScrollProvider scrollRef={containerRef}>
      <TopMenu bgColor="bg-mountbatten-pink" />
      <main className={`${bgColor} transition-colors duration-300 overflow-x-hidden py-24 px-44`}>
        <HomeTitle title='Mentions légales et politique de confidentialité' lineColor='bg-charcoal' letterColor='#9f7f92' />
        <ul className={`${oxygen.className} text-charcoal list-decimal pt-24`}>
          <li className={liStyle}>
            Présentation du site
          </li>
          <p className={pStyle}>
            En vertu de l&rsquo;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&rsquo;économie numérique, il est précisé aux utilisateurs du site {nomDuSite} l&rsquo;identité des différents intervenants dans le cadre de sa réalisation et de son suivi :<br/>
            Propriétaire : {propriAdresse}<br/>
            Créateur : {creator}<br/>
            Responsable publication : {nom}  – {email}<br/>
            Le responsable publication est une personne physique ou une personne morale.<br/>
            Webmaster : Votha Chheng – votha.chheng@gmail.com<br/>
            Hébergeur : Vercel Inc., 440 N Barranca Ave #4133 Covina, CA 91723 - privacy@vercel.com
          </p>
          <li className={liStyle}>
            Conditions générales d&rsquo;utilisation du site et des services proposés
          </li>
          <p className={pStyle}>
            L&rsquo;utilisation du site {nomDuSite} implique l&rsquo;acceptation pleine et entière des conditions générales d&rsquo;utilisation ci-après décrites. Ces conditions d&rsquo;utilisation sont susceptibles d&rsquo;être modifiées ou complétées à tout moment, les utilisateurs du site {nomDuSite} sont donc invités à les consulter de manière régulière. Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par {nom}, qui s&rsquo;efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l&rsquo;intervention. Le site {nomDuSite} est mis à jour régulièrement par  {nom}. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s&rsquo;imposent néanmoins à l&rsquo;utilisateur qui est invité à s&rsquo;y référer le plus souvent possible afin d&rsquo;en prendre connaissance.
          </p>
          <li className={liStyle}>
            Description des services fournis
          </li>
          <p className={pStyle}>
            Le site {nomDuSite} a pour objet de fournir une information concernant l&rsquo;ensemble des activités de la société. {nom} s&rsquo;efforce de fournir sur le site {nomDuSite} des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&rsquo;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. Tous les informations indiquées sur le site {nomDuSite} sont données à titre indicatif, et sont susceptibles d&rsquo;évoluer. Par ailleurs, les renseignements figurant sur le site {nomDuSite} ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
          </p>
          <li className={liStyle}>
            Limitations contractuelles sur les données techniques
          </li>
          <p className={pStyle}>
            Le site utilise la technologie NextJS. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l&rsquo;utilisation du site. De plus, l&rsquo;utilisateur du site s&rsquo;engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
          </p>
          <li className={liStyle}>
            Propriété intellectuelle et contrefaçons
          </li>
          <p className={pStyle}>
            {nom} est propriétaire des droits de propriété intellectuelle ou détient les droits d&rsquo;usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : {nom}.<br/>
            Toute exploitation non autorisée du site ou de l&rsquo;un quelconque des éléments qu&rsquo;il contient sera considérée comme constitutive d&rsquo;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
          <li className={liStyle}>
            Limitations de responsabilité
          </li>
          <p className={pStyle}>
            {nom} ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l&rsquo;utilisateur, lors de l&rsquo;accès au site {nomDuSite}, et résultant soit de l&rsquo;utilisation d&rsquo;un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l&rsquo;apparition d&rsquo;un bug ou d&rsquo;une incompatibilité. {nom} ne pourra également être tenue responsable des dommages indirects (tels par exemple qu&rsquo;une perte de marché ou perte d&rsquo;une chance) consécutifs à l&rsquo;utilisation du site {nomDuSite}. Des espaces interactifs (possibilité de poser des questions dans l&rsquo;espace contact) sont à la disposition des utilisateurs. {nom} se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, {nom} se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l&rsquo;utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).
          </p>
          <li className={liStyle}>
            Gestion des données personnelles
          </li>
          <p className={pStyle}>
            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l&rsquo;article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995. A l&rsquo;occasion de l&rsquo;utilisation du site {nomDuSite}, peuvent êtres recueillies : l&rsquo;URL des liens par l&rsquo;intermédiaire desquels l&rsquo;utilisateur a accédé au site {nomDuSite}, le fournisseur d&rsquo;accès de l&rsquo;utilisateur, l&rsquo;adresse de protocole Internet (IP) de l&rsquo;utilisateur. En tout état de cause {nom} ne collecte des informations personnelles relatives à l&rsquo;utilisateur que pour le besoin de certains services proposés par le site {nomDuSite}. L&rsquo;utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu&rsquo;il procède par lui-même à leur saisie. Il est alors précisé à l&rsquo;utilisateur du site {nomDuSite} l&rsquo;obligation ou non de fournir ces informations.

            Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l&rsquo;informatique, aux fichiers et aux libertés, tout utilisateur dispose d&rsquo;un droit d&rsquo;accès, de rectification et d&rsquo;opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d&rsquo;une copie du titre d&rsquo;identité avec signature du titulaire de la pièce, en précisant l&rsquo;adresse à laquelle la réponse doit être envoyée.

            Aucune information personnelle de l&rsquo;utilisateur du site {nomDuSite} n&rsquo;est publiée à l&rsquo;insu de l&rsquo;utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l&rsquo;hypothèse du rachat de {nom} et de ses droits permettrait la transmission des dites informations à l&rsquo;éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l&rsquo;utilisateur du site {nomDuSite} .

            Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
          </p>
          <li className={liStyle}>
            Liens hypertextes et cookies
          </li>
          <p className={pStyle}>
            Le site {nomDuSite} contient un certain nombre de liens hypertextes vers d&rsquo;autres sites, mis en place avec l&rsquo;autorisation de {nom}. Cependant, {nom} n&rsquo;a pas la possibilité de vérifier le contenu des sites ainsi visités, et n&rsquo;assumera en conséquence aucune responsabilité de ce fait. La navigation sur le site {nomDuSite} est susceptible de provoquer l&rsquo;installation de cookie(s) sur l&rsquo;ordinateur de l&rsquo;utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l&rsquo;identification de l&rsquo;utilisateur, mais qui enregistre des informations relatives à la navigation d&rsquo;un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.<br/>
            Le refus d&rsquo;installation d&rsquo;un cookie peut entraîner l&rsquo;impossibilité d&rsquo;accéder à certains services. L&rsquo;utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l&rsquo;installation des cookies.<br/>
            Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l&rsquo;onglet Options. Cliquer sur l&rsquo;onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l&rsquo;historique. Enfin décochez-la pour désactiver les cookies.<br/>
            Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur Paramètres de contenu. Dans la section « Cookies », vous pouvez bloquer les cookies.<br/>
            Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur préférences. Dans l&rsquo;onglet « Confidentialité », vous pouvez bloquer les cookies.
          </p>
          <li className={liStyle}>
            Droit applicable et attribution de juridiction
          </li>
          <p className={pStyle}>
            Tout litige en relation avec l&rsquo;utilisation du site {nomDuSite} est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
          </p>
          <li className={liStyle}>
            Les principales lois concernées
          </li>
          <p className={pStyle}>
            Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l&rsquo;informatique, aux fichiers et aux libertés. Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&rsquo;économie numérique.
          </p>
          <li className={liStyle}>
            Lexique
          </li>
          <p className={pStyle}>
            Utilisateur : Internaute se connectant, utilisant le site susnommé.<br/>
            Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l&rsquo;identification des personnes physiques auxquelles elles s&rsquo;appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
          </p>
        </ul>
      </main>
      <Footer bgColor='bg-eggplant' setFooterView={setFooterView} />
    </SmoothScrollProvider>
  )
}

export default MentionsLegalesScreen