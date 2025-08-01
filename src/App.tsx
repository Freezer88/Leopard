import React, { useState } from 'react'
import { 
  Button, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter,
  Input,
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Progress,
  CircularProgress,
  BarChart,
  PieChart,
  StatCard
} from './components/ui'
import { 
  Home, 
  Shield, 
  FileText, 
  Settings, 
  User,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Upload,
  Download
} from 'lucide-react'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  // Sample data for visualizations
  const coverageData = [
    { label: 'Dwelling Coverage', value: 300000, color: 'primary' },
    { label: 'Personal Property', value: 150000, color: 'secondary' },
    { label: 'Liability Protection', value: 300000, color: 'accent' },
    { label: 'Medical Payments', value: 5000, color: 'success' },
  ]

  const policyBreakdown = [
    { label: 'Dwelling', value: 45, color: 'primary' },
    { label: 'Personal Property', value: 25, color: 'secondary' },
    { label: 'Liability', value: 20, color: 'accent' },
    { label: 'Medical', value: 10, color: 'success' },
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-primary-600" />
              <h1 className="text-xl font-bold text-neutral-900">
                Homeowners Insurance AI
              </h1>
            </div>
            <nav className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <Button variant="ghost" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Policies
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <section>
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">
              Welcome to Your Insurance Dashboard
            </h2>
            <p className="text-lg text-neutral-600">
              Get peace of mind with AI-powered policy analysis and personalized recommendations.
            </p>
          </section>

          {/* Stats Overview */}
          <section>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Your Insurance Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Preparedness Score"
                value="85%"
                change={{ value: 12, type: 'increase' }}
                icon={<TrendingUp className="h-6 w-6" />}
                variant="success"
              />
              <StatCard
                title="Coverage Gaps"
                value="3"
                icon={<AlertTriangle className="h-6 w-6" />}
                variant="warning"
              />
              <StatCard
                title="Policy Value"
                value="$450,000"
                icon={<Shield className="h-6 w-6" />}
              />
              <StatCard
                title="Next Review"
                value="30 days"
                icon={<FileText className="h-6 w-6" />}
              />
            </div>
          </section>

          {/* Component Showcase */}
          <section>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Design System Components
            </h3>
            
            {/* Buttons */}
            <Card className="mb-6">
              <CardHeader>
                <h4 className="text-lg font-semibold text-neutral-900">Buttons</h4>
                <p className="text-sm text-neutral-600">
                  Action-oriented buttons with clear visual hierarchy
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary Action</Button>
                  <Button variant="secondary">Secondary Action</Button>
                  <Button variant="accent">Accent Action</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="danger">Danger Action</Button>
                  <Button loading>Loading...</Button>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </CardContent>
            </Card>

            {/* Inputs */}
            <Card className="mb-6">
              <CardHeader>
                <h4 className="text-lg font-semibold text-neutral-900">Input Fields</h4>
                <p className="text-sm text-neutral-600">
                  Form inputs with clear feedback and validation states
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Policy Number"
                    placeholder="Enter your policy number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your@email.com"
                    variant="success"
                    helperText="Email verified successfully"
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="(555) 123-4567"
                    variant="error"
                    error="Please enter a valid phone number"
                  />
                  <Input
                    label="Search Policies"
                    placeholder="Search by policy number or address"
                    leftIcon={<FileText className="h-4 w-4" />}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Progress Indicators */}
            <Card className="mb-6">
              <CardHeader>
                <h4 className="text-lg font-semibold text-neutral-900">Progress Indicators</h4>
                <p className="text-sm text-neutral-600">
                  Visual progress indicators for confidence building
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm font-medium text-neutral-700 mb-2">Linear Progress</h5>
                    <div className="space-y-4">
                      <Progress value={75} label="Policy Analysis" />
                      <Progress value={45} variant="warning" label="Coverage Review" />
                      <Progress value={90} variant="success" label="Documentation" />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-neutral-700 mb-2">Circular Progress</h5>
                    <div className="flex space-x-8">
                      <CircularProgress value={75} label="Overall Score" />
                      <CircularProgress value={60} variant="warning" label="Risk Level" />
                      <CircularProgress value={95} variant="success" label="Compliance" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Visualizations */}
            <Card className="mb-6">
              <CardHeader>
                <h4 className="text-lg font-semibold text-neutral-900">Data Visualizations</h4>
                <p className="text-sm text-neutral-600">
                  Clear data presentation for informed decision-making
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-sm font-medium text-neutral-700 mb-4">Coverage Limits</h5>
                    <BarChart data={coverageData} showValues />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-neutral-700 mb-4">Policy Breakdown</h5>
                    <PieChart data={policyBreakdown} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modal */}
            <Card className="mb-6">
              <CardHeader>
                <h4 className="text-lg font-semibold text-neutral-900">Modal Dialog</h4>
                <p className="text-sm text-neutral-600">
                  Focused interactions with clear visual hierarchy
                </p>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader onClose={() => setIsModalOpen(false)}>
          <h3 className="text-lg font-semibold text-neutral-900">
            Policy Analysis Complete
          </h3>
        </ModalHeader>
        <ModalContent>
          <p className="text-neutral-600 mb-4">
            We've analyzed your policy and found some important insights. Here's what we discovered:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-success-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-success-600" />
              <span className="text-sm text-success-700">
                Your dwelling coverage is adequate for your property value
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-warning-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-warning-600" />
              <span className="text-sm text-warning-700">
                Consider increasing your liability coverage
              </span>
            </div>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
          <Button onClick={() => setIsModalOpen(false)}>
            View Full Report
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default App 