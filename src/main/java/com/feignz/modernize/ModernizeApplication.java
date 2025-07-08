package com.feignz.modernize;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.dao.DataIntegrityViolationException;

import com.feignz.modernize.model.*;
import com.feignz.modernize.repo.*;

import net.datafaker.Faker;

@SpringBootApplication
public class ModernizeApplication {

	 @Autowired
	repo_transaction rd ;
	public static void main(String[] args) {
		SpringApplication.run(ModernizeApplication.class, args);
	}
	@Bean
	public CommandLineRunner AddNew()
	{
		return (args) ->
		{  try {
			try {
			   transactions it = new transactions();
			   Faker faker = new Faker();
			   // Ambil tanggal random dalam 10 tahun terakhir
			   Date randomDate = faker.date().past(3650, TimeUnit.DAYS);
			   // Konversi ke LocalDate
			   LocalDate localDate = randomDate.toInstant()
				   .atZone(ZoneId.systemDefault())
				   .toLocalDate();
	
               for(int i=0; i<=4000; i++)
                     {
                          it.setId_transactions(UUID.randomUUID().toString());
                          it.setBudget("marketing");
						it.setAmountSpent("54000");
						it.setTransaction_date(localDate);
						it.setDescription("budget created by :"+faker.name().fullName());
						 rd.save(it);

						Thread.sleep(1000);
                     }

                   } catch (DataIntegrityViolationException e)
                    {
                     System.out.print(e);
                 }
 } catch (ConstraintViolationException e)
                    {
                     System.out.print(e);
                 }
		};
	}
}
