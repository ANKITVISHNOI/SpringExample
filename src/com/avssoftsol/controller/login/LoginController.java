package com.avssoftsol.controller.login;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.avssoftsol.dao.product.ProductDao;
import com.avssoftsol.entity.product.Product;
import com.avssoftsol.entity.user.User;

@Controller
public class LoginController {

	@RequestMapping(value="/userLoginForm")
	public ModelAndView addUser(){
		ModelAndView modelAndView = null;
		try {
			modelAndView = new ModelAndView("loginUser");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return modelAndView;

	}

	/*@RequestMapping(value="/saveUser", method=RequestMethod.POST)
	public ModelAndView saveUser(@ModelAttribute("user") User user){
		try {
			if (user != null) {
				userService.saveUser(user);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return new ModelAndView("redirect:/listUser");

	}

	@RequestMapping(value="/listUser")
	public ModelAndView getUserList(){
		List<User> userList = null;
		try {
			userList = userService.getUserList();
		} catch (Exception e) {
			e.printStackTrace();
		}
		ModelAndView modelAndView = new ModelAndView("listUser");
		modelAndView.addObject("userList", userList);
		return modelAndView;

	}

	@RequestMapping(value="/editUser")
	public ModelAndView editUser(@RequestParam(value="id", required=true) Long id){
		User user= null;
		try {
			if (id != null) {
				user = userService.getUserById(id);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		ModelAndView modelAndView = new ModelAndView("editUser");
		modelAndView.addObject("user", user);
		return modelAndView;

	}

	@RequestMapping(value="/updateUser")
	public ModelAndView updateUser(@ModelAttribute("user") User userUpdate){
		try {
			if (userUpdate != null ) {
				userService.updateUser(userUpdate);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ModelAndView("redirect:/listUser");

	}

	@RequestMapping(value="/deleteUser")
	public ModelAndView deleteUser(@RequestParam(value="id", required=true) Long id){
		try {
			if (id != null) {
				userService.deleteUser(id);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ModelAndView("redirect:/listUser");

	}
*/
}
