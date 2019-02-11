package com.avssoftsol.service.appdata;

import java.util.List;
import java.util.Random;

import com.avssoftsol.dao.appdata.AppDataDao;
import com.avssoftsol.dao.appdata.AppDataDaoImpl;
import com.avssoftsol.dao.otplog.OTPLogDao;
import com.avssoftsol.dao.otplog.OTPLogDaoImpl;
import com.avssoftsol.entity.appdata.AppData;
import com.avssoftsol.entity.otplog.OTPLog;

public class AppDataServiceImpl implements AppDataService{
	
	private AppDataDao appDataDao = new AppDataDaoImpl();
	private OTPLogDao otpLogDao = new OTPLogDaoImpl();
	
	@Override
	public boolean addAppData(AppData appData) throws Exception {
		return appDataDao.addAppData(appData);
	}

	@Override
	public AppData getAppDataById(long id) throws Exception {
		return appDataDao.getAppDataById(id);
	}

	@Override
	public List<AppData> getAppDataList() throws Exception {
		return appDataDao.getAppDataList();
	}

	@Override
	public boolean deleteAppData(long id) throws Exception {
		return appDataDao.deleteAppData(id);
	}

	@Override
	public AppData getAppDataByAadhar(long aadhar) throws Exception {
		return appDataDao.getAppDataByAadhar(aadhar);
	}
	@Override
	public StringBuffer getAppDataByAadharOTP(long aadhar, StringBuffer otp) throws Exception {
		AppData appData = appDataDao.getAppDataByAadhar(aadhar);
		if (appData != null) {
			Random rnd = new Random();
			int rndNum = 100000+rnd.nextInt(900000);
			
			String otpStr = Integer.toString(rndNum);
			System.out.println(rndNum);
			
			OTPLog otpLog = new OTPLog();
			otpLog.setAppDataId(appData.getId());
			otpLog.setOtp(otpStr);
			otpLogDao.addOTPLog(otpLog);
			
			otp.append(rndNum);
		}
		return otp; 
	}

	@Override
	public AppData getAppDataByMobile(long mobile) throws Exception {
		return appDataDao.getAppDataByMobile(mobile);
	}

	@Override
	public boolean getAppDataByAadharAknowledge(long aadhar) {
		boolean res = false;
		res = appDataDao.getAppDataByAadharAknowledge(aadhar);
		return res;
	}

	
}
