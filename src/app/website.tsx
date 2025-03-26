'use client'
import React, { useState } from 'react';
import { Upload, FileText, Image } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const MortgageAnalyzer = () => {
  const [results, setResults] = useState({
    interestRate: null,
    recommendedLTV: null,
    processingStatus: '',
    error: null
  });

  const processImage = async (file) => {
    try {
      setResults(prev => ({ ...prev, processingStatus: 'Processing image...' }));

      // Here you would integrate with an OCR service to extract text from images
      // For demo purposes, we'll simulate processing
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulated results - in production, this would come from OCR and data processing
      setResults(prev => ({
        ...prev,
        interestRate: '5.25%',
        processingStatus: 'Image processed successfully'
      }));
    } catch (error) {
      setResults(prev => ({
        ...prev,
        error: 'Error processing image',
        processingStatus: ''
      }));
    }
  };

  const processPDF = async (file) => {
    try {
      setResults(prev => ({ ...prev, processingStatus: 'Processing PDF...' }));

      // Here you would integrate with a PDF parsing service
      // For demo purposes, we'll simulate processing
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulated results - in production, this would come from PDF parsing and analysis
      setResults(prev => ({
        ...prev,
        recommendedLTV: '80%',
        processingStatus: 'PDF processed successfully'
      }));
    } catch (error) {
      setResults(prev => ({
        ...prev,
        error: 'Error processing PDF',
        processingStatus: ''
      }));
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setResults({
      interestRate: null,
      recommendedLTV: null,
      processingStatus: '',
      error: null
    });

    const fileType = file.type;
    if (fileType.startsWith('image/')) {
      await processImage(file);
    } else if (fileType === 'application/pdf') {
      await processPDF(file);
    } else {
      setResults(prev => ({
        ...prev,
        error: 'Unsupported file type. Please upload an image or PDF.',
        processingStatus: ''
      }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Mortgage Data Analyzer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    Images or PDF files
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                />
              </label>
            </div>

            {results.processingStatus && (
              <Alert>
                <AlertDescription>{results.processingStatus}</AlertDescription>
              </Alert>
            )}

            {results.error && (
              <Alert variant="destructive">
                <AlertDescription>{results.error}</AlertDescription>
              </Alert>
            )}

            {(results.interestRate || results.recommendedLTV) && (
              <div className="grid grid-cols-2 gap-4">
                {results.interestRate && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Interest Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">{results.interestRate}</p>
                    </CardContent>
                  </Card>
                )}

                {results.recommendedLTV && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recommended LTV</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">{results.recommendedLTV}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MortgageAnalyzer;