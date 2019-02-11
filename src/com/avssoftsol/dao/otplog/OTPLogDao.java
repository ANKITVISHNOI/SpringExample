package com.avssoftsol.dao.otplog;

import java.util.List;

import com.avssoftsol.entity.otplog.OTPLog;


public interface OTPLogDao {

	public boolean addOTPLog(OTPLog otpLog) throws Exception;
	public OTPLog getOTPLogById(long id) throws Exception;
	public List<OTPLog> getOTPLogList() throws Exception;
	public boolean deleteOTPLog(long id) throws Exception;

}
