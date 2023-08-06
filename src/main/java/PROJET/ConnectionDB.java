package PROJET;

import java.sql.*;

public class ConnectionDB {
    public static void main(String[] args) {
        String jdbcUrl = "jdbc:mysql://localhost:3306/deliberation";
        String utilisateur = "root";
        String motDePasse = "";

        try {
            Connection connexion = DriverManager.getConnection(jdbcUrl, utilisateur, motDePasse);
            System.out.println("Connexion à la base de données MySQL établie !");
        } catch (SQLException e) {
            System.out.println("Erreur lors de la connexion à la base de données MySQL : " + e.getMessage());
        }
    }
}
