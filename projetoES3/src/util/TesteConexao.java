package util;
import java.sql.Connection;
import java.sql.SQLException;

public class TesteConexao {

		public static void main(String[] args) {
			System.out.println("TESTE");
			try {
				Connection cx = Conexao.getConnectionMySQL();
				if(cx != null)
					System.out.println("CONECTADO......");
				else
					System.out.println("N�O CONECTADO......");
			} catch (ClassNotFoundException | SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}				
		}
}
