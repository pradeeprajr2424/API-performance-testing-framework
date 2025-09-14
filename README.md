# API Performance Testing Framework

**Automated API Performance Testing with JMeter & Docker**

This project is a **modular, Dockerized API Performance Testing Framework** built to run JMeter tests in a containerized environment. It is designed for developers and performance engineers to quickly execute, monitor, and analyze API performance without manual setup.

---

## Tech Stack
- **JMeter** – for load and performance testing  
- **Docker** – containerized test environment  
- **Bash** – automation script (`run_tests.sh`)  
- **HTML Reports** – automated performance results  

---

## Project Structure
```

api-performance-testing-framework/
├─ tests/                 # JMeter test plans (.jmx)
├─ reports/               # Test results & HTML reports
├─ scripts/               # Automation scripts
│   └─ run\_tests.sh
├─ assets/                # Optional: screenshots of reports
└─ README.md

````

---

##  How to Run
1. Make sure **Docker Desktop** is installed and running.  
2. Enable **WSL2 integration** for Ubuntu (if using WSL).  
3. Clone the repo:
```bash
git clone https://github.com/pradeeprajr2424/api-performance-testing-framework.git
cd api-performance-testing-framework
````

4. Run the test script:

```bash
./scripts/run_tests.sh
```

5. Open the generated report:

```
reports/html/index.html
```

You’ll see latency, throughput, response times, and error rates.

---

##  Sample Report

![Performance Report](assets/report_screenshot.png)

---

##  Features

* Fully automated Dockerized JMeter test execution
* Generates HTML reports automatically
* Easy to add new API tests by dropping `.jmx` files into the `tests/` folder
* Modular and ready for integration in CI/CD pipelines

---

## Author

**Pradeep Raj** – Performance Test Engineer | DevOps Enthusiast
[LinkedIn](https://www.linkedin.com/in/pradeeprajr2424) | [GitHub](https://github.com/pradeeprajr2424)

---

## Future Improvements

* Add **parameterized test plans** for dynamic API endpoints
* Integrate **Slack/email notifications** for test results
* Add **JMeter metrics parsing** and visualization dashboards


## Sample Performance Report

![Performance Report](assets/report_screenshot.png)

