pipeline{
    agent any

    stages {
        stage('Checkout'){
            steps{
                git url: 'https://github.com/ohmprakash1506/node_CRUD_APP.git', branch: 'main'
                echo 'Checkout Completed'
            }
        }
        stage('Test'){
            echo 'Testing..'
        }
        stage('Deploy'){
            steps{
                echo 'Deployment..'
            }
        }
    }
}