#!/bin/bash
echo "🚀 Running API Performance Test with JMeter..."

docker run --rm -v $PWD/tests:/tests -v $PWD/reports:/reports \
    justb4/jmeter -n -t /tests/sample-test.jmx -l /reports/result.jtl -e -o /reports/html

echo " Test completed. Open reports/html/index.html to view results."

