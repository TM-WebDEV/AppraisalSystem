package controller.appraisal;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import controller.Action;
import controller.ActionForward;
import model.dao.GoalDAO;
import model.dto.GoalDTO;

public class ListGoal implements Action {
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

		String goalID = request.getParameter("goal_id");
		String goal = request.getParameter("goal");
		String kpi = request.getParameter("kpi");
		String resource = request.getParameter("resource");
		String status = request.getParameter("status");
		String period = request.getParameter("period");
		ArrayList<GoalDTO> goals = new GoalDAO().listGoal(goalID, goal, kpi, resource, status, period);

		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		String goalds = new Gson().toJson(goals);

		response.getWriter().write(goalds);

		System.out.println(goalds);

		return null;
	}
}
