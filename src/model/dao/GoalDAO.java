package model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.naming.InitialContext;
import javax.sql.DataSource;

import model.dto.GoalDTO;

public class GoalDAO {
	Connection conn;

	public GoalDAO() throws Exception {
		InitialContext init = new InitialContext();
		DataSource ds = (DataSource) init.lookup("java:comp/env/dbappraisal");
		this.conn = ds.getConnection();
	}

	public ArrayList<GoalDTO> listGoal(String goalID, String goal, String kpi, String resource, String status,
			String period) throws SQLException {
		String sql = "SELECT * FROM tblgoaloliver ORDER By goal_num ASC";
		PreparedStatement ps = conn.prepareStatement(sql);
		ResultSet rs = ps.executeQuery();
		ArrayList<GoalDTO> goals = new ArrayList<GoalDTO>();
		try {
			while (rs.next()) {
				GoalDTO g = new GoalDTO();
				g.setGoalID(rs.getString("goal_id"));
				g.setGoal(rs.getString("goal"));
				g.setKpi(rs.getString("kpi"));
				g.setResource(rs.getString("resource"));
				g.setStatus(rs.getInt("status"));
				g.setPeriod(rs.getString("period"));
				goals.add(g);
			}
			return goals;
		} finally {
			if (rs != null)
				try {
					rs.close();
				} catch (SQLException e) {
					throw e;
				}
			if (ps != null)
				try {
					ps.close();
				} catch (SQLException e) {
					throw e;
				}
			if (conn != null)
				try {
					conn.close();
				} catch (SQLException e) {
					throw e;
				}
		}

	}

}
