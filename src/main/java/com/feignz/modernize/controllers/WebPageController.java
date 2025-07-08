package com.feignz.modernize.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebPageController {

	@RequestMapping("/")
	public String index(){
		return "index.html";
	}


	@RequestMapping("/login")
	public String login(){
		return "authentication-login.html";
	}

	@RequestMapping("/register")
	public String register(){
		return "authentication-register.html";
	}

	@RequestMapping("/icon-tabler")
	public String iconTabler(){
		return "icon-tabler.html";
	}

	@RequestMapping("/sample-page")
	public String samplePage(){
		return "sample-page.html";
	}

	@RequestMapping("/ui-alerts")
	public String uiAlerts(){
		return "ui-alerts.html";
	}

	@RequestMapping("/ui-buttons")
	public String uiButtons(){
		return "ui-buttons.html";
	}

	@RequestMapping("/ui-card")
	public String uiCards(){
		return "ui-card.html";
	}

	@RequestMapping("/ui-forms")
	public String uiForm(){
		return "ui-forms.html";
	}

	@RequestMapping("/ui-typography")
	public String uiTypography(){
		return "ui-typography";
	}




}
