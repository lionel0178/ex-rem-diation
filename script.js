 function calculerIMC(event) {
      event.preventDefault(); // empêche le rechargement

      let poids = document.getElementById("poids").value.trim();
      let tailleCm = document.getElementById("taille").value.trim();
      let erreur = document.getElementById("erreur");
      let resultat = document.getElementById("resultat");

      // Réinitialiser les messages
      erreur.innerText = "";
      resultat.innerText = "";

      // Vérifier que les champs ne sont pas vides
      if (poids === "" || tailleCm === "") {
        erreur.innerText = "⚠️ Veuillez remplir tous les champs.";
        return;
      }

      // Convertir en nombre
      poids = parseFloat(poids);
      tailleCm = parseFloat(tailleCm);

      // Vérifier que ce sont des nombres positifs
      if (isNaN(poids) || isNaN(tailleCm) || poids <= 0 || tailleCm <= 0) {
        erreur.innerText = "⚠️ Entrez des valeurs valides (nombres positifs).";
        return;
      }

      // Calcul de l'IMC
      let tailleM = tailleCm / 100;
      let imc = (poids / (tailleM * tailleM)).toFixed(2);

      // Déterminer l’interprétation
      let interpretation = "";
      if (imc < 18.5) {
        interpretation = "Maigreur";
      } else if (imc < 25) {
        interpretation = "Poids normal";
      } else if (imc < 30) {
        interpretation = "Surpoids";
      } else {
        interpretation = "Obésité";
      }

      // Affichage
      resultat.innerText = `✅ Votre IMC est de ${imc} (${interpretation}).`;
    }
    
