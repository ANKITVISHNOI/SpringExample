package com.avssoftsol.dao.appdata;

import java.util.List;

import com.avssoftsol.entity.appdata.AppData;



public interface AppDataDao {

	public boolean addAppData(AppData appData) throws Exception;
	public AppData getAppDataById(long id) throws Exception;
	public List<AppData> getAppDataList() throws Exception;
	public boolean deleteAppData(long id) throws Exception;
	public AppData getAppDataByAadhar(long aadhar) throws Exception;
	public AppData getAppDataByMobile(long mobile) throws Exception;
	public boolean getAppDataByAadharAknowledge(long aadhar);

}
