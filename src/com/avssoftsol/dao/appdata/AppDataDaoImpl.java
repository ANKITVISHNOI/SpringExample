package com.avssoftsol.dao.appdata;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.avssoftsol.app.util.HibernateUtil;
import com.avssoftsol.entity.appdata.AppData;


@Transactional
public class AppDataDaoImpl implements AppDataDao{


	@Override
	public boolean addAppData(AppData appData) {
		Session session = null;
		Transaction tx = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			tx = session.beginTransaction();
			session.save(appData);
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (tx != null) {
				tx.rollback();
			}
		}
		finally{
			session.close();
		}
		return true;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<AppData> getAppDataList() {
		Session session = null;
		List<AppData> appDataList = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(AppData.class);
			appDataList = criteria.list();

		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return appDataList;
	}

	@Override
	public AppData getAppDataById(long id) {
		Session session = null;
		AppData appData = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			appData =  (AppData) session.get(AppData.class, id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return appData;
	}

	@Override
	public boolean deleteAppData(long id) {
		Session session = null;
		Transaction tx = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();	
			tx = session.beginTransaction();
			AppData appData = new AppData();
			appData.setId(id);
			session.delete(appData);
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (tx != null) {
				tx.rollback();
			}
		}
		finally{
			session.close();
		}
		return true;
	}

	@Override
	public AppData getAppDataByAadhar(long aadhar) {
		Session session = null;
		AppData appData = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(AppData.class);
			appData = (AppData) criteria.add(Restrictions.eq("aadharNumber", aadhar)).uniqueResult();
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return appData;
	}

	@Override
	public AppData getAppDataByMobile(long mobile) {
		Session session = null;
		AppData appData = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(AppData.class);
			appData = (AppData) criteria.add(Restrictions.eq("mobile", mobile)).uniqueResult();
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		return appData;
	}

	@Override
	public boolean getAppDataByAadharAknowledge(long aadhar) {
		Session session = null;
		AppData appData = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(AppData.class);
			appData = (AppData) criteria.add(Restrictions.eq("aadharNumber", aadhar)).uniqueResult();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		if (appData != null) {
			return true;
		}
		return false;
	}

}
