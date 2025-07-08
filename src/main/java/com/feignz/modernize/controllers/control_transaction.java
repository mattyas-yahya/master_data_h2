package com.feignz.modernize.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.feignz.modernize.model.*;

@Controller
public class control_transaction
{


    @RequestMapping(value={"/transaction"})
    public String transaction()
    {
        return "transaction/transaction";
    }

    @GetMapping({"/transaction"})
    public String _form(Model model)
    {
        model.addAttribute("transaction", new transactions());
        return "transaction/transaction";
    }

}
