import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);


  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }
  
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false)
  }

  function deleteGoalHandler(id){
   setCourseGoals((currentCourseGoals)=>{
    return currentCourseGoals.filter((goal)=>goal.id !==id);
   })
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add your Goal" color="#a065ec" onPress={startAddGoalHandler}/>
     <GoalInput  addGoalHandler={addGoalHandler} modalIsVisible={modalIsVisible} endAddGoalHandler={endAddGoalHandler}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} deleteGoalHandler={deleteGoalHandler} id={itemData.item.id} />;

          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a'
  },

  goalContainer: {
    flex: 5,
  },
});
