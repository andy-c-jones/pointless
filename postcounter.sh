
jsonBody='{"counter":"20"}'

curl -X POST -H "Content-Type: application/json" -d $jsonBody http://localhost:3000/counter
