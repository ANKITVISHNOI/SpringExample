package com.avssoftsol.controller.appdata;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.avssoftsol.entity.appdata.AppData;
import com.avssoftsol.entity.status.Status;
import com.avssoftsol.service.appdata.AppDataService;
import com.avssoftsol.service.appdata.AppDataServiceImpl;


@Controller
@RequestMapping("/appdata")
public class AppDataController {
	
	//@Autowired AppDataService appDataServices; 
	private AppDataService appDataServices = new AppDataServiceImpl();
	
	static final Logger logger = Logger.getLogger(AppDataController.class);

	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	Status addAppData(@RequestBody AppData appData) {
		try {
			appDataServices.addAppData(appData);
			return new Status(1, "App Data added Successfully !");
		} catch (Exception e) {
			// e.printStackTrace();
			return new Status(0, e.toString());
		}

	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody
	AppData getAppDataById(@PathVariable("id") long id) {
		AppData appData = null;
		try {
			appData = appDataServices.getAppDataById(id);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return appData;
	}
	
	@RequestMapping(value = "aadhar/{aadhar}", method = RequestMethod.GET)
	public @ResponseBody
	AppData getAppDataByAadhar(@PathVariable("aadhar") long aadhar) {
		AppData appData = null;
		try {
			appData = appDataServices.getAppDataByAadhar(aadhar);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return appData;
	}
	
	@RequestMapping(value = "aadharAknowledge/{aadhar}", method = RequestMethod.GET)
	public @ResponseBody
	Status getAppDataByAadharAknowledge(@PathVariable("aadhar") long aadhar) {
		boolean res = false;
		try {
			res = appDataServices.getAppDataByAadharAknowledge(aadhar);
			if (res == true) {
				return new Status(1, "Data Already Exist !");
			}
			return new Status(0, "Data Not Exist !");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new Status(0, "Data Not Exist !");
	}
	
	@RequestMapping(value = "aadharOTP/{aadhar}", method = RequestMethod.GET)
	public @ResponseBody
	Status getAppDataByAadharOTP(@PathVariable("aadhar") long aadhar) {
		StringBuffer otp = new StringBuffer();
		try {
			appDataServices.getAppDataByAadharOTP(aadhar, otp);
			return new Status(1, "Yourt OTP is:" +otp);
		} catch (Exception e) {
			e.printStackTrace();
			return new Status(0, "Data Not Found");
		}
	}
	
	@RequestMapping(value = "mobile/{mobile}", method = RequestMethod.GET)
	public @ResponseBody
	AppData getAppDataByMobile(@PathVariable("mobile") long mobile) {
		AppData appData = null;
		try {
			appData = appDataServices.getAppDataByMobile(mobile);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return appData;
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public @ResponseBody
	List<AppData> getAppDataList() {

		List<AppData> appDataList = null;
		try {
			appDataList = appDataServices.getAppDataList();

		} catch (Exception e) {
			e.printStackTrace();
		}

		return appDataList;
	}

	@RequestMapping(value = "delete/{id}", method = RequestMethod.GET)
	public @ResponseBody
	Status deleteAppData(@PathVariable("id") long id) {

		try {
			appDataServices.deleteAppData(id);
			return new Status(1, "App Data deleted Successfully !");
		} catch (Exception e) {
			return new Status(0, e.toString());
		}

	}

	public AppDataService getAppDataServices() {
		return appDataServices;
	}

	public void setAppDataServices(AppDataService appDataServices) {
		this.appDataServices = appDataServices;
	}

	
}
