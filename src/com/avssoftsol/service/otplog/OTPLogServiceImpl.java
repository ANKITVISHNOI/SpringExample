package com.avssoftsol.service.otplog;

import java.util.List;

import com.avssoftsol.dao.otplog.OTPLogDao;
import com.avssoftsol.dao.otplog.OTPLogDaoImpl;
import com.avssoftsol.dao.product.ProductDao;
import com.avssoftsol.dao.product.ProductDaoImpl;
import com.avssoftsol.entity.otplog.OTPLog;
import com.avssoftsol.entity.product.Product;

public class OTPLogServiceImpl implements OTPLogService{
	
	private OTPLogDao otplogDao = new OTPLogDaoImpl();
	
	@Override
	public boolean addOTPLog(OTPLog otpLog) throws Exception {
		return otplogDao.addOTPLog(otpLog);
	}

	@Override
	public OTPLog getOTPLogById(long id) throws Exception {
		return otplogDao.getOTPLogById(id);
	}

	@Override
	public List<OTPLog> getOTPLogList() throws Exception {
		return otplogDao.getOTPLogList();
	}

	@Override
	public boolean deleteOTPLog(long id) throws Exception {
		return otplogDao.deleteOTPLog(id);
	}

}
