/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package PROJET;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.Vector;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author HP
 */
public class Interfacematiere extends javax.swing.JFrame {

    /**
     * Creates new form Interface1
     */
    public Interfacematiere() {
        initComponents();
        afficheTable();
    }

     private void afficheTable() {
        int CC;
        Connection con1;
        PreparedStatement insert;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con1 = DriverManager.getConnection("jdbc:mysql://localhost/deliberation","root","");
            insert = con1.prepareStatement("SELECT * FROM matiere");
            ResultSet Rs = insert.executeQuery();
            
            ResultSetMetaData RSMD = Rs.getMetaData();
            CC = RSMD.getColumnCount();
            DefaultTableModel DFT = (DefaultTableModel) jTable1.getModel();
            DFT.setRowCount(0);
 
            while (Rs.next()) {
                Vector v2 = new Vector();
          
                for (int ii = 1; ii <= CC; ii++) {
                    v2.add(Rs.getString("id"));
                    v2.add(Rs.getString("nom"));
                    v2.add(Rs.getString("encadreur"));
                    v2.add(Rs.getString("module"));
                }
                DFT.addRow(v2);
            }
        } catch (Exception e) {
        }
    }
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        jTable1 = new javax.swing.JTable();
        jButton1 = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();
        jButton6 = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        idAdmin1 = new javax.swing.JLabel();
        prenomAdmin1 = new javax.swing.JLabel();
        nomAdmin1 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        jLabel9 = new javax.swing.JLabel();
        title = new javax.swing.JLabel();
        jLabel10 = new javax.swing.JLabel();
        jLabel11 = new javax.swing.JLabel();
        jLabel12 = new javax.swing.JLabel();
        jLabel13 = new javax.swing.JLabel();
        jButton3 = new javax.swing.JButton();
        jButton8 = new javax.swing.JButton();
        jButton9 = new javax.swing.JButton();
        jButton10 = new javax.swing.JButton();
        jButton11 = new javax.swing.JButton();
        jLabel14 = new javax.swing.JLabel();
        jLabel15 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel1.setFont(new java.awt.Font("Papyrus", 3, 24)); // NOI18N
        jLabel1.setText("Vice Directeur");
        getContentPane().add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 60, 230, 60));

        jTable1.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null}
            },
            new String [] {
                "id Matiere", "Nom Matiere", "Professeur", "Heure"
            }
        ));
        jScrollPane1.setViewportView(jTable1);

        getContentPane().add(jScrollPane1, new org.netbeans.lib.awtextra.AbsoluteConstraints(320, 200, 571, 480));

        jButton1.setBackground(new java.awt.Color(251, 51, 51));
        jButton1.setFont(new java.awt.Font("Maiandra GD", 0, 18)); // NOI18N
        jButton1.setForeground(new java.awt.Color(255, 255, 255));
        jButton1.setText("Supprimer");
        jButton1.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED, new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102)));
        jButton1.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton1, new org.netbeans.lib.awtextra.AbsoluteConstraints(730, 120, 160, 60));

        jButton2.setBackground(new java.awt.Color(255, 51, 51));
        jButton2.setFont(new java.awt.Font("Maiandra GD", 1, 24)); // NOI18N
        jButton2.setForeground(new java.awt.Color(255, 255, 255));
        jButton2.setText("QUITTER");
        jButton2.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED, new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102)));
        jButton2.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton2, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 590, 160, 60));

        jButton6.setBackground(new java.awt.Color(0, 153, 51));
        jButton6.setFont(new java.awt.Font("Maiandra GD", 0, 18)); // NOI18N
        jButton6.setForeground(new java.awt.Color(255, 255, 255));
        jButton6.setText("Modifier");
        jButton6.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED, new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102)));
        jButton6.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton6.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton6ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton6, new org.netbeans.lib.awtextra.AbsoluteConstraints(530, 120, 160, 60));

        jLabel2.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Horizontal-Line-Transparent-Background.png"))); // NOI18N
        getContentPane().add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(-30, 320, 260, 10));

        jLabel3.setIcon(new javax.swing.ImageIcon(getClass().getResource("/vertical-Line-Transparent-Background.png"))); // NOI18N
        getContentPane().add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(80, -50, 160, -1));

        jLabel7.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Horizontal-Line-Transparent-Background.png"))); // NOI18N
        getContentPane().add(jLabel7, new org.netbeans.lib.awtextra.AbsoluteConstraints(200, 120, 30, 11));

        idAdmin1.setFont(new java.awt.Font("Maiandra GD", 0, 24)); // NOI18N
        idAdmin1.addInputMethodListener(new java.awt.event.InputMethodListener() {
            public void caretPositionChanged(java.awt.event.InputMethodEvent evt) {
            }
            public void inputMethodTextChanged(java.awt.event.InputMethodEvent evt) {
                idAdmin1InputMethodTextChanged(evt);
            }
        });
        getContentPane().add(idAdmin1, new org.netbeans.lib.awtextra.AbsoluteConstraints(550, 0, 340, 40));

        prenomAdmin1.setFont(new java.awt.Font("Maiandra GD", 0, 24)); // NOI18N
        prenomAdmin1.addInputMethodListener(new java.awt.event.InputMethodListener() {
            public void caretPositionChanged(java.awt.event.InputMethodEvent evt) {
            }
            public void inputMethodTextChanged(java.awt.event.InputMethodEvent evt) {
                prenomAdmin1InputMethodTextChanged(evt);
            }
        });
        getContentPane().add(prenomAdmin1, new org.netbeans.lib.awtextra.AbsoluteConstraints(610, 40, 290, 40));

        nomAdmin1.setFont(new java.awt.Font("Maiandra GD", 0, 24)); // NOI18N
        getContentPane().add(nomAdmin1, new org.netbeans.lib.awtextra.AbsoluteConstraints(580, 80, 290, 40));

        jLabel8.setFont(new java.awt.Font("Papyrus", 3, 24)); // NOI18N
        jLabel8.setText(" Admin Dashboard");
        getContentPane().add(jLabel8, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 230, 60));

        jLabel9.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Horizontal-Line-Transparent-Background.png"))); // NOI18N
        getContentPane().add(jLabel9, new org.netbeans.lib.awtextra.AbsoluteConstraints(-30, 120, 260, 10));

        title.setFont(new java.awt.Font("Maiandra GD", 1, 36)); // NOI18N
        title.setText("Liste des Matieres");
        getContentPane().add(title, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 30, 350, 60));

        jLabel10.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Horizontal-Line-Transparent-Background.png"))); // NOI18N
        getContentPane().add(jLabel10, new org.netbeans.lib.awtextra.AbsoluteConstraints(-30, 120, 260, 10));

        jLabel11.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Horizontal-Line-Transparent-Background.png"))); // NOI18N
        getContentPane().add(jLabel11, new org.netbeans.lib.awtextra.AbsoluteConstraints(-30, 220, 260, 10));

        jLabel12.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Horizontal-Line-Transparent-Background.png"))); // NOI18N
        getContentPane().add(jLabel12, new org.netbeans.lib.awtextra.AbsoluteConstraints(-30, 530, 260, 10));

        jLabel13.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Horizontal-Line-Transparent-Background.png"))); // NOI18N
        getContentPane().add(jLabel13, new org.netbeans.lib.awtextra.AbsoluteConstraints(-30, 430, 260, 10));

        jButton3.setBackground(new java.awt.Color(102, 102, 0));
        jButton3.setFont(new java.awt.Font("Maiandra GD", 0, 18)); // NOI18N
        jButton3.setForeground(new java.awt.Color(255, 255, 255));
        jButton3.setText("Matiere");
        jButton3.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED, new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102)));
        jButton3.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton3ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton3, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 240, 200, 70));

        jButton8.setBackground(new java.awt.Color(0, 153, 51));
        jButton8.setFont(new java.awt.Font("Maiandra GD", 0, 18)); // NOI18N
        jButton8.setForeground(new java.awt.Color(255, 255, 255));
        jButton8.setText("Ajouter");
        jButton8.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED, new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102)));
        jButton8.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton8.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton8ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton8, new org.netbeans.lib.awtextra.AbsoluteConstraints(320, 120, 160, 60));

        jButton9.setBackground(new java.awt.Color(0, 153, 51));
        jButton9.setFont(new java.awt.Font("Maiandra GD", 0, 18)); // NOI18N
        jButton9.setForeground(new java.awt.Color(255, 255, 255));
        jButton9.setText("Etudiant");
        jButton9.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED, new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102)));
        jButton9.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton9.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton9ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton9, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 350, 200, 70));

        jButton10.setBackground(new java.awt.Color(0, 153, 51));
        jButton10.setFont(new java.awt.Font("Maiandra GD", 0, 18)); // NOI18N
        jButton10.setForeground(new java.awt.Color(255, 255, 255));
        jButton10.setText("Deliberation");
        jButton10.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED, new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102)));
        jButton10.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton10.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton10ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton10, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 450, 200, 70));

        jButton11.setBackground(new java.awt.Color(0, 153, 51));
        jButton11.setFont(new java.awt.Font("Maiandra GD", 0, 18)); // NOI18N
        jButton11.setForeground(new java.awt.Color(255, 255, 255));
        jButton11.setText("Professeur");
        jButton11.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED, new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102), new java.awt.Color(0, 102, 102)));
        jButton11.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton11.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton11ActionPerformed(evt);
            }
        });
        getContentPane().add(jButton11, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 140, 200, 70));

        jLabel14.setIcon(new javax.swing.ImageIcon(getClass().getResource("/backgroundinterface1.jpg"))); // NOI18N
        jLabel14.setText("jLabel14");
        getContentPane().add(jLabel14, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, -2, 920, 700));

        jLabel15.setText("jLabel15");
        getContentPane().add(jLabel15, new org.netbeans.lib.awtextra.AbsoluteConstraints(400, 140, -1, -1));

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed

    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jButton2ActionPerformed

    private void jButton6ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton6ActionPerformed
        // TODO add your handling code here:
        updateMatiere updateM = new updateMatiere();
        updateM.setVisible(true);
    }//GEN-LAST:event_jButton6ActionPerformed

    private void jButton3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton3ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jButton3ActionPerformed

    private void jButton8ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton8ActionPerformed
        // TODO add your handling code here:
        addMatiere addM = new addMatiere();
        addM.setVisible(true);
    }//GEN-LAST:event_jButton8ActionPerformed

    private void jButton9ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton9ActionPerformed
        // TODO add your handling code here:
        Interfacematiere.super.dispose();
        Interfaceetudiant i = new Interfaceetudiant();
        i.setVisible(true);
    }//GEN-LAST:event_jButton9ActionPerformed

    private void jButton10ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton10ActionPerformed
        // TODO add your handling code here:
        Interfacematiere.super.dispose();
        Interfacedeliberation intdelib = new Interfacedeliberation();
        intdelib.setVisible(true);
    }//GEN-LAST:event_jButton10ActionPerformed

    private void jButton11ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton11ActionPerformed
        // TODO add your handling code here:
        Interfacematiere.super.dispose();
        Interface1 i1 = new Interface1();
        i1.setVisible(true);
    }//GEN-LAST:event_jButton11ActionPerformed

    private void idAdmin1InputMethodTextChanged(java.awt.event.InputMethodEvent evt) {//GEN-FIRST:event_idAdmin1InputMethodTextChanged
       Connection connexion = null;
        try {
            connexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/deliberation","root","");
        } catch (SQLException ex) {
            Logger.getLogger(Interfacematiere.class.getName()).log(Level.SEVERE, null, ex);
        }
    PreparedStatement statement = null;
    String sql = "SELECT idvd FROM vicedirecteur WHERE idvd=?";
        try {
            statement = connexion.prepareStatement(sql);
        } catch (SQLException ex) {
            Logger.getLogger(Interfacematiere.class.getName()).log(Level.SEVERE, null, ex);
        }
    
        try {
            statement.setInt(1,001);
        } catch (SQLException ex) {
            Logger.getLogger(Interfacematiere.class.getName()).log(Level.SEVERE, null, ex);
        }
    ResultSet resultat = null;
        try {
            resultat = statement.executeQuery();
        } catch (SQLException ex) {
            Logger.getLogger(Interfacematiere.class.getName()).log(Level.SEVERE, null, ex);
        }
        try {
            if(resultat.next())
            {
                int id=resultat.getInt("idvd") ;
                idAdmin1.setText(""+id);
                
            }} catch (SQLException ex) {
            Logger.getLogger(Interfacematiere.class.getName()).log(Level.SEVERE, null, ex);
        }
    }//GEN-LAST:event_idAdmin1InputMethodTextChanged

    private void prenomAdmin1InputMethodTextChanged(java.awt.event.InputMethodEvent evt) {//GEN-FIRST:event_prenomAdmin1InputMethodTextChanged
        Connection connexion = null;
        try {
            connexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/deliberation","root","");
        } catch (SQLException ex) {
            Logger.getLogger(Interfacematiere.class.getName()).log(Level.SEVERE, null, ex);
        }
    PreparedStatement statement = null;
    String sql = "SELECT prenom FROM vicedirecteur WHERE idvd=?";
        try {
            statement = connexion.prepareStatement(sql);
        } catch (SQLException ex) {
            Logger.getLogger(Interfacematiere.class.getName()).log(Level.SEVERE, null, ex);
        }
    
        try {
            statement.setInt(1,001);
        } catch (SQLException ex) {
            Logger.getLogger(Interfacematiere.class.getName()).log(Level.SEVERE, null, ex);
        }
    ResultSet resultat = null;
        try {
            resultat = statement.executeQuery();
        } catch (SQLException ex) {
            Logger.getLogger(Interfacematiere.class.getName()).log(Level.SEVERE, null, ex);
        }
        try {
            if(resultat.next())
            {
                String prenomVD =  resultat.getString("prenom");
                prenomAdmin1.setText(""+prenomVD);
                      
            }} catch (SQLException ex) {
            Logger.getLogger(Interfacematiere.class.getName()).log(Level.SEVERE, null, ex);
        }
    }//GEN-LAST:event_prenomAdmin1InputMethodTextChanged

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Interfacematiere.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Interfacematiere.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Interfacematiere.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Interfacematiere.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Interfacematiere().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel idAdmin1;
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton10;
    private javax.swing.JButton jButton11;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton3;
    private javax.swing.JButton jButton6;
    private javax.swing.JButton jButton8;
    private javax.swing.JButton jButton9;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel11;
    private javax.swing.JLabel jLabel12;
    private javax.swing.JLabel jLabel13;
    private javax.swing.JLabel jLabel14;
    private javax.swing.JLabel jLabel15;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTable jTable1;
    private javax.swing.JLabel nomAdmin1;
    private javax.swing.JLabel prenomAdmin1;
    private javax.swing.JLabel title;
    // End of variables declaration//GEN-END:variables
}
