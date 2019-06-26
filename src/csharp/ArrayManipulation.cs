using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Solution {

    // Complete the arrayManipulation function below.
    static long arrayManipulation(int n, int[][] queries) {

        long[] outputArray = new long[n+1];
        int length = outputArray.Length;

        for(int i = 0; i < queries.Length; i++) {
            int startIndex = queries[i][0];
            int endIndex = queries[i][1];
            long increament = queries[i][2];

            if(startIndex >=length) continue;

            outputArray[startIndex] += increament;
            if((endIndex + 1) < length) {
                outputArray[endIndex + 1] -= increament;
            }
        }

        long maxValue = 0;
        long tempValue = 0;
        for(int i = 1; i < outputArray.Length; i++) {
            tempValue += outputArray[i];
            if(tempValue > maxValue) {
                maxValue = tempValue;
            }
        }

        return maxValue;

    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string[] nm = Console.ReadLine().Split(' ');

        int n = Convert.ToInt32(nm[0]);

        int m = Convert.ToInt32(nm[1]);

        int[][] queries = new int[m][];

        for (int i = 0; i < m; i++) {
            queries[i] = Array.ConvertAll(Console.ReadLine().Split(' '), queriesTemp => Convert.ToInt32(queriesTemp));
        }

        long result = arrayManipulation(n, queries);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
