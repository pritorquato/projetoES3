package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {
	private static String driver;
	private static String url;
	private static String user;
	private static String password;

	public static Connection getConnectionPostgres() throws ClassNotFoundException, SQLException {
		driver = "org.postgresql.Driver";
		url = "jdbc:postgresql://localhost:5432/esiii1s2020";
		user = "postgres";
		password = "postgres";
		return getConnection();

	}

	public static Connection getConnectionMySQL() throws ClassNotFoundException, SQLException {
		driver = "com.mysql.cj.jdbc.Driver";
		url = "jdbc:mysql://localhost:3307/projetoes3?useTimezone=true&serverTimezone=UTC";	
		user = "root";
		password = "123root#";
			return getConnection();
		}

	private static Connection getConnection() throws ClassNotFoundException, SQLException {

		Class.forName(driver);
		Connection conn = DriverManager.getConnection(url, user, password);

		return conn;

	}

}
