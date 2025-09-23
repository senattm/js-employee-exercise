const companyData = {
  "company": "TechnoSoft A.Ş.",
  "employees": [
    {
      "id": 1,
      "firstName": "Ahmet",
      "lastName": "Yılmaz",
      "email": "ahmet.yilmaz@technosoft.com",
      "position": "Frontend Developer",
      "salary": 75000,
      "startDate": "2022-03-15",
      "skills": ["JavaScript", "React", "CSS", "HTML"],
      "isActive": true,
      "department": "Development"
    },
    {
      "id": 2,
      "firstName": "Elif",
      "lastName": "Kaya",
      "email": "elif.kaya@technosoft.com",
      "position": "Backend Developer",
      "salary": 80000,
      "startDate": "2021-08-20",
      "skills": ["Python", "Django", "PostgreSQL", "Docker"],
      "isActive": true,
      "department": "Development"
    },
    {
      "id": 3,
      "firstName": "Mehmet",
      "lastName": "Özkan",
      "email": "mehmet.ozkan@technosoft.com",
      "position": "UI/UX Designer",
      "salary": 65000,
      "startDate": "2023-01-10",
      "skills": ["Figma", "Adobe XD", "Photoshop", "Sketch"],
      "isActive": false,
      "department": "Design"
    },
    {
      "id": 4,
      "firstName": "Ayşe",
      "lastName": "Demir",
      "email": "ayse.demir@technosoft.com",
      "position": "Project Manager",
      "salary": 90000,
      "startDate": "2020-12-05",
      "skills": ["Agile", "Scrum", "JIRA", "Leadership"],
      "isActive": true,
      "department": "Management"
    },
    {
      "id": 5,
      "firstName": "Can",
      "lastName": "Arslan",
      "email": "can.arslan@technosoft.com",
      "position": "DevOps Engineer",
      "salary": 85000,
      "startDate": "2022-06-30",
      "skills": ["AWS", "Kubernetes", "Jenkins", "Linux"],
      "isActive": true,
      "department": "Operations"
    }
  ],
  "projects": [
    {
      "id": 101,
      "name": "E-Ticaret Platformu",
      "status": "Tamamlandı",
      "startDate": "2023-01-15",
      "endDate": "2023-06-30",
      "teamMembers": [1, 2, 4],
      "budget": 250000
    },
    {
      "id": 102,
      "name": "Mobil Uygulama",
      "status": "Devam Ediyor",
      "startDate": "2023-08-01",
      "endDate": null,
      "teamMembers": [1, 3, 5],
      "budget": 180000
    }
  ]
};
module.exports = companyData;