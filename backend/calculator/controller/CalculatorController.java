package com.calculator.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.calculator.model.CalculatorModel;

@RestController
@CrossOrigin(value = "http://localhost:4200")
public class CalculatorController {

	@PostMapping("add")
	public int add(@RequestBody CalculatorModel calculator)
	{
		return calculator.getNum1()+calculator.getNum2();
		
	}
	
	@PostMapping("sub")
	public int sub(@RequestBody CalculatorModel calculator)
	{
		return calculator.getNum1()-calculator.getNum2();
		
	}
	
	@PostMapping("mult")
	public int mult(@RequestBody CalculatorModel calculator)
	{
		int mult = calculator.getNum1()*calculator.getNum2(); 
		return mult;
		
	}
	
	@PostMapping("div")
	public int div(@RequestBody CalculatorModel calculator)
	{
		return calculator.getNum1()/calculator.getNum2();
	}
	
	@PostMapping("mod")
	public int mod(@RequestBody CalculatorModel calculator)
	{
		return calculator.getNum1()%calculator.getNum2();
	}
}
