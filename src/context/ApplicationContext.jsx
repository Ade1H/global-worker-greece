import React, { createContext, useContext, useState, useEffect } from 'react';

const ApplicationContext = createContext();

export const useApplications = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplications must be used within an ApplicationProvider');
  }
  return context;
};

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const savedApplications = localStorage.getItem('applications');
    if (savedApplications) {
      setApplications(JSON.parse(savedApplications));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('applications', JSON.stringify(applications));
  }, [applications]);

  const addToApplications = (job) => {
    setApplications(prev => [...prev, { 
      ...job, 
      applicationDate: new Date().toISOString(),
      status: 'pending'
    }]);
  };

  const removeApplication = (jobId) => {
    setApplications(prev => prev.filter(app => app.id !== jobId));
  };

  const clearApplications = () => {
    setApplications([]);
  };

  const totalApplications = applications.length;

  return (
    <ApplicationContext.Provider value={{
      applications,
      addToApplications,
      removeApplication,
      clearApplications,
      totalApplications
    }}>
      {children}
    </ApplicationContext.Provider>
  );
};