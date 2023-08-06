package PROJET;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

import PROJET.login;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

/**
 *
 * @author HP
 */
public class menu extends login {
    Connection con;
    PreparedStatement pst;
    ResultSet rs;
    public menu()
    {
        initComponents();
    }
    public void Connect()
    {
        try{
            Class.forName("com.mysql.jdbc.Driver");
        }catch(Exception e){
            
        }
        
    }

    private void initComponents() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}
