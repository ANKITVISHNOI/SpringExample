package com.avssoftsol.controller.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {


	@RequestMapping(value="/")
	public ModelAndView add(){
		ModelAndView modelAndView = new ModelAndView("index");
		return modelAndView;

	}

}
