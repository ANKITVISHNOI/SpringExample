package com.avssoftsol.controller.otplog;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.avssoftsol.entity.otplog.OTPLog;
import com.avssoftsol.entity.status.Status;
import com.avssoftsol.service.otplog.OTPLogService;
import com.avssoftsol.service.otplog.OTPLogServiceImpl;


@Controller
@RequestMapping("/otplog")
public class OTPLogController {

	private OTPLogService otplogServices = new OTPLogServiceImpl();
	
	static final Logger logger = Logger.getLogger(OTPLogController.class);

	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	Status addOTPLog(@RequestBody OTPLog otpLog) {
		try {
			otplogServices.addOTPLog(otpLog);
			return new Status(1, "OTP added Successfully !");
		} catch (Exception e) {
			// e.printStackTrace();
			return new Status(0, e.toString());
		}

	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody
	OTPLog getOTPLogById(@PathVariable("id") long id) {
		OTPLog otpLog = null;
		try {
			otpLog = otplogServices.getOTPLogById(id);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return otpLog;
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public @ResponseBody
	List<OTPLog> getOTPLogList() {

		List<OTPLog> otpLogList = null;
		try {
			otpLogList = otplogServices.getOTPLogList();

		} catch (Exception e) {
			e.printStackTrace();
		}

		return otpLogList;
	}

	@RequestMapping(value = "delete/{id}", method = RequestMethod.GET)
	public @ResponseBody
	Status deleteOTPLog(@PathVariable("id") long id) {

		try {
			otplogServices.deleteOTPLog(id);
			return new Status(1, "OTP deleted Successfully !");
		} catch (Exception e) {
			return new Status(0, e.toString());
		}

	}

}
