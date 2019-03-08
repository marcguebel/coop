<template>
  <div class="home" style="text-align: left; width: 60%; margin-left: 20%;">
    <h2>Projet Coop VueJS</h2>
    <p>
    	Projet du TD : Co'op, un clone de Slack en VueJS (Normalement tout est fait !)<br />

    	<h3>Chaque utilisateur peut : </h3>
    	<ul>
    		<li>Se créer un compte (Nom, email, mot de passe)</li>
    		<li>Se connecter et se déconnecter</li>
    		<li>Voir la liste des membres / Voir la fiche d'un membre / Supprimer un membre, sauf soit même !</li>
    		<li>Voir la liste des conversations Voir les conversations et leur description</li>
    		<li>Voir la liste des messages d'une conversation, voir les messages, poster un message / cliquer sur le nom du membre qui a posté le message pour voir la fiche / Editer un message et supprimer un message</li>
    	</ul>



    

    
    </p>
    <p>Fiche d'un membre : La fiche permet de visualiser les infos publiques d'un membre : nom, email, avatar ainsi que la liste des 10 derniers messages postés par le membre. Ces messages sont cliquables et permettent de visionner le message, en contexte, dans la conversation.</p>

	
	</p>
	<p><h3>Chaque membre peut :</h3>

    <ul>
    	<li>Créer une conversation (Définir un titre et description)</li>
    	<li>Ouvrir toutes les conversations et voirs les messages dans une conversation</li>
    	<li>Poster un message dans une conversation</li>
    	<li>Modifier ses conversation (modifier son titre et sa description)</li>
    	<li>Supprimer une conversation</li>
    	<li>Editer ou supprimer seulement ses propres messages</li>
    </ul>
</p>


    </p><p><h3>Chaque membre se compose : </h3>D'un nom complet (nom + prenom), d'une adresse mail, d'un mot de passe vérifié lors de sa création à l'aide d'une double saisie
</p>
    </p>
  </div>
</template>

<script>


export default {
  name: 'home',
}
</script>
